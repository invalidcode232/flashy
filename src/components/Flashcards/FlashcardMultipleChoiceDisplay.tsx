import { ChoiceData } from '../../types/types';

type Props = {
    choices: ChoiceData[];
};

const FlashcardMultipleChoiceDisplay = (props: Props) => {
    console.log(props.choices);

    return (
        <>
            {props.choices.map((choice, index) => {
                return (
                    <div key={index}>
                        <p>{choice.choice}</p>
                    </div>
                );
            })}
        </>
    );
};

export default FlashcardMultipleChoiceDisplay;
