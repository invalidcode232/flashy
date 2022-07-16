import { collections } from '@prisma/client';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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
            <h1 className="text-3xl font-bold">{collection?.name}</h1>
        </Layout>
    );
};

export default Collection;
