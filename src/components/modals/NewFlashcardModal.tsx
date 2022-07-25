import React from 'react';
import NewFlashcardForm from '../Forms/NewFlashcardForm';
import Modal from '../UI/Modal';
import { FlashcardData } from '../../types/types';

type Props = {
    isOpen: boolean;
    collectionId: number;
    onClose: () => void;
    addFlashcardState: (flashcard: FlashcardData) => void;
};

const NewFlashcardModal = (props: Props) => {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <h1 className="text-2xl mb-5">New Flashcard</h1>
            <NewFlashcardForm
                onClose={props.onClose}
                collectionId={props.collectionId}
                addFlashcardState={props.addFlashcardState}
            />
        </Modal>
    );
};

export default NewFlashcardModal;
