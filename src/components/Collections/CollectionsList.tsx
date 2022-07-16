import { collections } from '@prisma/client';
import React, { useContext } from 'react';
import CollectionContext from '../../contexts/CollectionContext';
import CollectionCard from './CollectionCard';

type Props = {};

const CollectionsList = (props: Props) => {
    const collectionCtx = useContext(CollectionContext);

    return (
        <div className="flex flex-wrap gap-y-5">
            {collectionCtx?.collections.map((collection: collections) => (
                <CollectionCard key={collection.id} collection={collection} />
            ))}
        </div>
    );
};

export default CollectionsList;
