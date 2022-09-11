import { Field, FormikProps } from 'formik';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

type Props = {
    choices: string[];
    addMultipleChoice: (event: React.MouseEvent<HTMLInputElement>) => void;
    removeMultipleChoice: (index: number) => void;
    formik: FormikProps<any>;
};

const FlashcardMultipleChoiceInput = (props: Props) => {
    return (
        <>
            {props.choices.map((choice, index) => (
                <React.Fragment key={index}>
                    <div className="flex justify-between w-1/5 my-2">
                        <div>
                            <Field
                                name="correctChoice"
                                type="radio"
                                placeholder="New choice"
                                value={choice}
                                className={'mr-2 scale-125'}
                            />
                            <Field
                                name={`answerChoices[${index}]`}
                                className={'px-1 rounded-sm'}
                                placeholder={'New choice'}
                            />
                        </div>
                        <button
                            className="text-gray-500"
                            onClick={() => props.removeMultipleChoice(index)}
                        >
                            <FaTrash />
                        </button>
                    </div>
                </React.Fragment>
            ))}

            <input type="radio" disabled className="mr-2" />
            <input
                type="text"
                placeholder="Add a choice"
                onClick={props.addMultipleChoice}
                className={'my-1 px-1 rounded-sm'}
                readOnly
            />
        </>
    );
};

export default FlashcardMultipleChoiceInput;
