import { Form, FormikProvider, useFormik } from 'formik';
import React, { FormEvent } from 'react';
import * as Yup from 'yup';
import { ChoiceData, FlashcardData } from '../../types/types';
import FlashcardEssayInput from '../Flashcards/FlashcardEssayInput';
import FlashcardMultipleChoiceInput from '../Flashcards/FlashcardMultipleChoiceInput';
import Input from '../UI/Input';
import OutlineButton from '../UI/OutlineButton';

type Props = {
    onClose: () => void;
    collectionId: number;
    addFlashcardState: (flashcard: FlashcardData) => void;
};

const NewFlashcardForm = (props: Props) => {
    const [showMultipleChoiceForm, setShowMultipleChoiceForm] =
        React.useState(false);

    const formik = useFormik({
        initialValues: {
            question: '',
            answerEssay: '',
            isMultiple: false,
            feedback: '',
            answerChoices: [] as string[],
            correctChoice: '',
        },
        onSubmit: async (values) => {
            const choices: ChoiceData[] = [];

            values.answerChoices.forEach((choice) => {
                return choices.push({
                    choice: choice,
                    is_correct: choice === values.correctChoice,
                });
            });

            let flashcardData: FlashcardData = {
                question: values.question,
                collection_id: props.collectionId,
                is_multiple: values.isMultiple,
                choices: choices,
            };

            const response = await fetch('/api/flashcards/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(flashcardData),
            });

            if (response.ok) {
                const flashcardData = await response.json();
                props.addFlashcardState(flashcardData);

                props.onClose();
            } else {
                const err = await response.text();
                console.log(response.status, err);
            }
        },
        validationSchema: Yup.object().shape({
            question: Yup.string()
                .min(3, 'Question must be at least 3 characters')
                .required('Question is required'),
            isMultiple: Yup.boolean(),
            feedback: Yup.string(),
            answerEssay: Yup.string().when('isMultiple', {
                is: false,
                then: Yup.string().required('Answer is required'),
            }),
            answerChoices: Yup.array().when('isMultiple', {
                is: true,
                then: Yup.array().required('Answer is required'),
            }),
        }),
    });

    const multipleChoiceAddHandler = () => {
        formik.setFieldValue('answerChoices', [
            ...formik.values.answerChoices,
            '',
        ]);
    };

    const answerInput = showMultipleChoiceForm ? (
        <FlashcardMultipleChoiceInput
            choices={formik.values.answerChoices}
            addMultipleChoice={multipleChoiceAddHandler}
            formik={formik}
        />
    ) : (
        <FlashcardEssayInput />
    );

    const formChangeHandler = (e: FormEvent) => {
        const target = e.target as HTMLInputElement;

        if ((target as HTMLInputElement).name === 'isMultiple') {
            setShowMultipleChoiceForm(target.checked);
        }
    };

    return (
        <FormikProvider value={formik}>
            <Form onChange={formChangeHandler}>
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
                {answerInput}
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
