import { Field, FormikProps } from 'formik';
import React from 'react';

type Props = {
    choices: string[];
    addMultipleChoice: (event: React.MouseEvent<HTMLInputElement>) => void;
    formik: FormikProps<any>;
};

const FlashcardMultipleChoiceInput = (props: Props) => {
    return (
        <>
            {props.choices.map((choice, index) => (
                <React.Fragment key={index}>
                    <Field
                        name="correctChoice"
                        type="radio"
                        placeholder="New choice"
                        value={choice}
                        className={'mr-2 scale-125'}
                    />
                    <Field
                        name={`answerChoices[${index}]`}
                        className={'my-1 px-1 rounded-sm'}
                        placeholder={'New choice'}
                    />

                    <br />
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
