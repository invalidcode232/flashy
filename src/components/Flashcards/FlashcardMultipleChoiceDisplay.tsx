import { ChoiceData } from '../../types/types';
import { FaCheck } from 'react-icons/all';

type Props = {
    choices: ChoiceData[];
};

const FlashcardMultipleChoiceDisplay = (props: Props) => {
    return (
        <>
            {props.choices.map((choice, index) => {
                return (
                    <div
                        key={index}
                        className={`p-2 text-md rounded-md flex text-gray-600 justify-between ${
                            choice.is_correct && 'bg-green-100'
                        }`}
                    >
                        <div>
                            <input
                                type={'radio'}
                                // disabled={true}
                                readOnly={true}
                                key={index}
                                defaultChecked={choice.is_correct}
                            />
                            <span className={'ml-3'}>{choice.choice}</span>
                        </div>
                        {choice.is_correct && (
                            <div>
                                <FaCheck className={'text-green-500'} />
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    );
};

export default FlashcardMultipleChoiceDisplay;
