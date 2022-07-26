import React from 'react';
import CollectionDataForm from '../Forms/CollectionDataForm';
import Modal from '../UI/Modal';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const CollectionDataModal = (props: Props) => {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <h1 className="text-2xl mb-5">New Collection</h1>
            <CollectionDataForm onClose={props.onClose} />
        </Modal>
    );
};

export default CollectionDataModal;
