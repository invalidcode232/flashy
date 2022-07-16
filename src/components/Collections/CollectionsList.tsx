import { collections } from '@prisma/client';
import React, { useContext } from 'react';
import CollectionContext from '../../contexts/CollectionContext';
import Card from '../UI/Card';

type Props = {};

const CollectionsList = (props: Props) => {
    const collectionCtx = useContext(CollectionContext);

    return (
        <div className="flex flex-wrap gap-y-5">
            {collectionCtx?.collections.map((collection: collections) => (
                <Card
                    key={collection.id}
                    name={collection.name}
                    flashcards={10}
                />
            ))}
        </div>
    );
};

export default CollectionsList;
