import React from 'react';
import FlashcardDataForm from '../Forms/FlashcardDataForm';
import Modal from '../UI/Modal';
import { FlashcardData } from '../../types/types';

type Props = {
    isOpen: boolean;
    collectionId: number;
    onClose: () => void;
    submitHandler: (flashcard: FlashcardData) => void;
    edit?: boolean;
    flashcard?: FlashcardData;
};

const FlashcardDataModal = (props: Props) => {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <h1 className="text-2xl mb-5">New Flashcard</h1>
            <FlashcardDataForm
                onClose={props.onClose}
                collectionId={props.collectionId}
                submitHandler={props.submitHandler}
            />
        </Modal>
    );
};

export default FlashcardDataModal;
