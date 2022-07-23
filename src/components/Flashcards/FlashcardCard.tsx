import { FaPen } from 'react-icons/fa';
import Card from '../UI/Card';
import { useState } from 'react';
import FlashcardMultipleChoiceDisplay from './FlashcardMultipleChoiceDisplay';
import { FlashcardData } from '../../types/types';

type Props = {
    flashcard: FlashcardData;
};

function FlashcardCard(props: Props) {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <Card className={'py-3 px-4 my-5'}>
            <div className="flex justify-between">
                <h1 className={'text-xl font-semibold'}>
                    {props.flashcard.question}
                </h1>
                <button className="bg-blue-500 p-3 hover:bg-blue-700 text-white hover:text-white rounded-md">
                    <FaPen />
                </button>
            </div>
            <h2 className="text-sm text-gray-500 mb-1">
                {props.flashcard.is_multiple
                    ? 'Multiple Choice Question'
                    : 'Essay question'}
            </h2>
            <button
                className={
                    'p-3 text-gray-500 text-left rounded-md w-max hover:shadow-xl'
                }
                onClick={() => setShowAnswer(!showAnswer)}
            >
                {showAnswer ? 'Hide answer' : 'Show answer'}
            </button>
            {showAnswer && (
                <FlashcardMultipleChoiceDisplay
                    choices={props.flashcard.choices}
                />
            )}
        </Card>
    );
}

export default FlashcardCard;
