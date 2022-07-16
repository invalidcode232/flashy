import { collections } from '@prisma/client';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CollectionInfo from '../../../components/Collections/CollectionInfo';
import CollectionPlayCard from '../../../components/Collections/CollectionPlayCard';
import Layout from '../../../layouts/Dashboard/Layout';

const Collection: NextPage = () => {
    const router = useRouter();

    const [collection, setCollection] = useState<collections | undefined>(
        undefined,
    );
    const { collectionId } = router.query;

    useEffect(() => {
        fetch(`/api/collections/${collectionId?.toString()}`).then(
            async (response) => {
                const data = await response.json();
                setCollection(data);
            },
        );
    }, []);

    return (
        <Layout>
            <div className="w-4/5">
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
            </div>
        </Layout>
    );
};

export default Collection;
