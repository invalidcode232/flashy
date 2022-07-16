import React from 'react';
import NewCollectionForm from '../Forms/NewCollectionForm';
import Modal from '../UI/Modal';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const NewCollectionModal = (props: Props) => {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <h1 className="text-2xl mb-5">New Collection</h1>
            <NewCollectionForm onClose={props.onClose} />
        </Modal>
    );
};

export default NewCollectionModal;
