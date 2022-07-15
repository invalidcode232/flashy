import React from 'react';
import Modal from 'react-modal';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

Modal.setAppElement('#__next');

const NewCollectionModal = (props: Props) => {
    return (
        <Modal isOpen={props.isOpen}>
            <h1 className="text-2xl">Hello</h1>
            <button onClick={props.onClose}>Close</button>
        </Modal>
    );
};

export default NewCollectionModal;
