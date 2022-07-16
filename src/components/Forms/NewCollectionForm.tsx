import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';
import Input from '../UI/Input';
import OutlineButton from '../UI/OutlineButton';
import { useContext } from 'react';
import CollectionContext from '../../contexts/CollectionContext';

type Props = {
    onClose: () => void;
};

const NewCollectionForm = (props: Props) => {
    const collectionCtx = useContext(CollectionContext);

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: async (values) => {
            const response = await fetch('/api/collections/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const collection = await response.json();
            collectionCtx?.addCollection(collection);

            props.onClose();
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Name must be at least 3 characters')
                .max(20, 'Name must be max 20 characters')
                .required('Name is required'),
        }),
    });

    return (
        <FormikProvider value={formik}>
            <Form>
                <Input
                    name="name"
                    type="text"
                    autoComplete="off"
                    placeholder="Collection name.."
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-500 rounded-md text-white px-3 mt-3 inline-block mr-3"
                >
                    Add
                </button>
                <OutlineButton onClick={props.onClose} color={'gray-500'}>
                    Close
                </OutlineButton>
            </Form>
        </FormikProvider>
    );
};

export default NewCollectionForm;
