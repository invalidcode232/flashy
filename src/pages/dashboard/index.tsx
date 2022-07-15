import { collections } from '@prisma/client';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import NewCollectionModal from '../../components/modals/NewCollectionModal';
import Card from '../../components/UI/Card';
import Layout from '../../layouts/dashboard/Layout';

const Dashboard: NextPage = () => {
    const [collections, setCollections] = useState([]);
    const [newCollectionModal, setNewCollectionModal] = useState(false);

    useEffect(() => {
        fetch('/api/collections').then(async (response) => {
            const data = await response.json();
            setCollections(data);
        });
    }, []);

    return (
        <Layout>
            <NewCollectionModal
                isOpen={newCollectionModal}
                onClose={() => setNewCollectionModal(false)}
            />
            <div className="flex justify-between">
                <h1 className="text-2xl mb-5">Collections</h1>
                <button
                    className={
                        'bg-white px-5 py-1 text-xl border-2 border-blue-500 text-blue-500 hover:cursor-pointer rounded-md hover:bg-blue-500 hover:border-white hover:text-white'
                    }
                    onClick={() => setNewCollectionModal(true)}
                >
                    <FaPlus />
                </button>
            </div>
            <div className="flex">
                {collections.map((collection: collections) => (
                    <Card
                        key={collection.id}
                        name={collection.name}
                        flashcards={10}
                    />
                ))}
            </div>
        </Layout>
    );
};

export default Dashboard;
