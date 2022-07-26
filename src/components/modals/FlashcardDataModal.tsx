import React from 'react';
import FlashcardDataForm from '../Forms/FlashcardDataForm';
import Modal from '../UI/Modal';
import { FlashcardData } from '../../types/types';

type Props = {
    isOpen: boolean;
    collectionId: number;
    onClose: () => void;
    addFlashcardState: (flashcard: FlashcardData) => void;
};

const FlashcardDataModal = (props: Props) => {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <h1 className="text-2xl mb-5">New Flashcard</h1>
            <FlashcardDataForm
                onClose={props.onClose}
                collectionId={props.collectionId}
                addFlashcardState={props.addFlashcardState}
            />
        </Modal>
    );
};

export default FlashcardDataModal;
