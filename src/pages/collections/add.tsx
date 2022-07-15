import type { NextPage } from 'next';
import Layout from '../../layouts/dashboard/Layout';
import { useFormik, Form, FormikProvider, useField } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/UI/Input';

const Dashboard: NextPage = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: (values) => {
            fetch('/api/collections/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Name must be at least 3 characters')
                .max(20, 'Name must be max 20 characters')
                .required('Name is required'),
        }),
    });

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-5">Add new collection</h1>
            <FormikProvider value={formik}>
                <Form>
                    <Input name="name" type="text" />
                    <button
                        type="submit"
                        className="p-1 bg-blue-500 rounded-lg text-white px-3 mt-3"
                    >
                        Add
                    </button>
                </Form>
            </FormikProvider>
        </Layout>
    );
};

export default Dashboard;
