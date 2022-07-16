import React from 'react';
import ReactModal from 'react-modal';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

ReactModal.setAppElement('#__next');

const Modal = (props: Props) => {
    return <ReactModal isOpen={props.isOpen}>{props.children}</ReactModal>;
};

export default Modal;
