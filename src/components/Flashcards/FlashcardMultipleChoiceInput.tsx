import { Field, FormikProps } from 'formik';
import React from 'react';
import { MultipleChoice } from '../../types/types';

type Props = {
    choices: MultipleChoice[];
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
                        value={index.toString()}
                    />
                    <Field name={`answerChoices[${index}]`} />

                    <br />
                </React.Fragment>
            ))}

            <input type="radio" disabled className="mr-3" />
            <input
                type="text"
                placeholder="Add a choice"
                onClick={props.addMultipleChoice}
                readOnly
            />
        </>
    );
};

export default FlashcardMultipleChoiceInput;
