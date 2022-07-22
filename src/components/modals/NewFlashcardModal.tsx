import React from 'react';
import NewFlashcardForm from '../Forms/NewFlashcardForm';
import Modal from '../UI/Modal';

type Props = {
    isOpen: boolean;
    collectionId: number;
    onClose: () => void;
};

const NewFlashcardModal = (props: Props) => {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <h1 className="text-2xl mb-5">New Flashcard</h1>
            <NewFlashcardForm
                onClose={props.onClose}
                collectionId={props.collectionId}
            />
        </Modal>
    );
};

export default NewFlashcardModal;
