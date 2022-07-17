import { Form, FormikProvider, useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import Input from '../UI/Input';
import OutlineButton from '../UI/OutlineButton';

type Props = {
    onClose: () => void;
};

const NewFlashcardForm = (props: Props) => {
    const formik = useFormik({
        initialValues: {
            question: '',
            answer: '',
            isMultiple: false,
            feedback: '',
        },
        onSubmit: async (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            question: Yup.string()
                .min(3, 'Question must be at least 3 characters')
                .required('Question is required'),
            answer: Yup.string()
                .min(3, 'Answer must be at least 3 characters')
                .required('Answer is required'),
            isMultiple: Yup.boolean(),
            feedback: Yup.string(),
        }),
    });

    return (
        <FormikProvider value={formik}>
            <Form>
                <Input
                    name="question"
                    type="text"
                    autoComplete="off"
                    placeholder="Question.."
                />
                <Input
                    name="isMultiple"
                    type="checkbox"
                    autoComplete="off"
                    label="Is multiple choice?"
                />
                <Input
                    name="answer"
                    type="text"
                    autoComplete="off"
                    placeholder="Answer.."
                />
                <Input
                    name="feedback"
                    type="text"
                    autoComplete="off"
                    placeholder="Feedback.."
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white px-3 mt-3 inline-block mr-3"
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

export default NewFlashcardForm;
