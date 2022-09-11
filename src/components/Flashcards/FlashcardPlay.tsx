import { Field, Form, FormikProvider, useFormik } from 'formik';
import { FlashcardData } from '../../types/types';

type Props = {
    flashcard: FlashcardData;
    answerHandler: (answer: string) => void;
};

const FlashcardPlay = (props: Props) => {
    console.log(props.flashcard);

    const formik = useFormik({
        initialValues: {
            answer: '',
            answerChoice: '',
        },
        onSubmit: async (values) => {
            props.answerHandler(
                props.flashcard.isMultiple
                    ? values.answerChoice
                    : values.answer,
            );

            formik.resetForm();
        },
    });

    return (
        <div className="p-3 rounded-md shadow-lg">
            <h1 className="text-2xl text-black font-semibold mb-5">
                {props.flashcard.question}
            </h1>
            <FormikProvider value={formik}>
                <Form>
                    {!props.flashcard.isMultiple && (
                        <>
                            <Field
                                name="answer"
                                type="text"
                                className="bg-gray-200 border border-gray-300 rounded-md p-2 w-1/2"
                            />
                            <br />
                        </>
                    )}

                    {props.flashcard.isMultiple &&
                        props.flashcard.choices.map((choice, index) => (
                            <div key={index} className="my-2">
                                <label>
                                    <Field
                                        type="radio"
                                        // key={index}
                                        className="mr-2"
                                        name="answerChoice"
                                        value={index.toString()}
                                    />
                                    {choice.choice}
                                </label>
                            </div>
                        ))}

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-md text-white mt-3"
                    >
                        Submit
                    </button>
                </Form>
            </FormikProvider>
        </div>
    );
};

export default FlashcardPlay;
