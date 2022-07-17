import { collections } from '@prisma/client';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import CollectionInfo from '../../../components/Collections/CollectionInfo';
import CollectionPlayCard from '../../../components/Collections/CollectionPlayCard';
import NewFlashcardModal from '../../../components/Modals/NewFlashcardModal';
import Layout from '../../../layouts/Dashboard/Layout';

const Collection: NextPage = () => {
    const [newFlashcardModal, setNewFlashcardModal] = useState(false);

    const router = useRouter();

    const [collection, setCollection] = useState<collections | undefined>(
        undefined,
    );

    const { collectionId } = router.query;

    useEffect(() => {
        if (collectionId) {
            fetch(`/api/collections/${collectionId?.toString()}`).then(
                async (response) => {
                    const data = await response.json();
                    setCollection(data);
                },
            );
        }
    }, [collectionId]);

    return (
        <Layout>
            <NewFlashcardModal
                isOpen={newFlashcardModal}
                onClose={() => setNewFlashcardModal(false)}
            />

            <h1 className="text-3xl font-bold mb-5">{collection?.name}</h1>

            <CollectionInfo info={'Flashcard count'} value={'10'} />
            <CollectionInfo info={'Date modified'} value={'2021/02/15'} />
            <CollectionInfo info={'Date created'} value={'2021/02/15'} />

            <CollectionPlayCard header="Play collection">
                You have <strong>10</strong> flashcards in schedule.
            </CollectionPlayCard>
            <CollectionPlayCard header="Play all flashcards">
                Play all <strong>52</strong> flashcards in this collection.
            </CollectionPlayCard>

            <div className="flex justify-between mt-6">
                <h1 className="text-2xl mb-5 font-semibold">Flashcards</h1>

                <button
                    className={
                        'bg-white px-5 py-1 text-xl border-2 border-blue-500 text-blue-500 hover:cursor-pointer rounded-md hover:bg-blue-500 hover:border-white hover:text-white'
                    }
                    onClick={() => setNewFlashcardModal(true)}
                >
                    <FaPlus />
                </button>
            </div>
        </Layout>
    );
};

export default Collection;
