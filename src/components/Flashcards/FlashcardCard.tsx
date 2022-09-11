import { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { ChoiceData, FlashcardData } from '../../types/types';
import FlashcardDataModal from '../Modals/FlashcardDataModal';
import Card from '../UI/Card';
import FlashcardMultipleChoiceDisplay from './FlashcardMultipleChoiceDisplay';

type Props = {
  flashcard: FlashcardData;
  deleteFlashcardState: (flashcard: FlashcardData) => void;
  editFlashcardState: (id: number, choice: ChoiceData[]) => void;
};

function FlashcardCard(props: Props) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [editFlashcardModal, setEditFlashcardModal] = useState(false);

  const deleteFlashcardHandler = async () => {
    props.deleteFlashcardState(props.flashcard);

    await fetch(`/api/flashcards/${props.flashcard.id}/delete`, {
      method: 'DELETE',
    });
  };

  const editFlashcardHandler = async (flashcard: FlashcardData) => {
    if (props.flashcard.id) {
      props.editFlashcardState(props.flashcard.id, flashcard.choices);
    }

    const response = await fetch(
      `/api/flashcards/${props.flashcard.id}/edit`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(flashcard),
      },
    );

    if (!response.ok) {
      throw new Error('Failed to edit flashcard');
    }

    setEditFlashcardModal(false);
  };

  return (
    <Card className={'py-3 px-4 my-5'}>
      {editFlashcardModal && (
        <FlashcardDataModal
          isOpen={editFlashcardModal}
          onClose={() => setEditFlashcardModal(false)}
          collectionId={props.flashcard.collectionId}
          edit={true}
          submitHandler={editFlashcardHandler}
          flashcard={props.flashcard}
        />
      )}

      <div className="flex justify-between">
        <h1 className={'text-xl font-semibold'}>
          {props.flashcard.question}
        </h1>
        <div>
          <button
            className="bg-blue-500 p-3 hover:bg-blue-700 text-white hover:text-white rounded-md mr-2"
            onClick={() => setEditFlashcardModal(true)}
          >
            <FaPen />
          </button>
          <button
            className="bg-red-500 p-3 hover:bg-red-700 text-white hover:text-white rounded-md"
            onClick={deleteFlashcardHandler}
          >
            <FaTrash />
          </button>
        </div>
      </div>
      <h2 className="text-sm text-gray-500 mb-1">
        {props.flashcard.isMultiple
          ? 'Multiple Choice Question'
          : 'Essay question'}
      </h2>
      <button
        className={
          'p-2 text-gray-500 text-left rounded-md w-max hover:shadow-xl'
        }
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {showAnswer ? 'Hide answer' : 'Show answer'}
      </button>
      {showAnswer &&
        (props.flashcard.isMultiple ? (
          <FlashcardMultipleChoiceDisplay
            choices={props.flashcard.choices}
          />
        ) : (
          <p>{props.flashcard.answer}</p>
        ))}
    </Card>
  );
}

export default FlashcardCard;
