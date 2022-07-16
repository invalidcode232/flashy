import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import NewCollectionModal from '../Modals/NewCollectionModal';

type Props = {};

const CollectionsHeader = (props: Props) => {
    const [newCollectionModal, setNewCollectionModal] = useState(false);

    return (
        <>
            <NewCollectionModal
                isOpen={newCollectionModal}
                onClose={() => setNewCollectionModal(false)}
            />
            <div className="flex justify-between mb-4">
                <h1 className="text-3xl font-bold mb-5">Collections</h1>
                <button
                    className={
                        'bg-white px-5 py-1 text-xl border-2 border-blue-500 text-blue-500 hover:cursor-pointer rounded-md hover:bg-blue-500 hover:border-white hover:text-white'
                    }
                    onClick={() => setNewCollectionModal(true)}
                >
                    <FaPlus />
                </button>
            </div>
        </>
    );
};

export default CollectionsHeader;
