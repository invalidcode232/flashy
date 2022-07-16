import Link from 'next/link';
import React from 'react';
import { FaCog } from 'react-icons/fa';
import { collections } from '../../types/types';
import Card from '../UI/Card';

type Props = {
    collection: collections;
};

const CollectionCard = (props: Props) => {
    return (
        <Card className="hover:border-blue-600 w-1/5 hover:shadow-lg hover:shadow-slate-300 hover:cursor-pointer">
            <Link href={`/collections/${props.collection.id}`}>
                <div className="hover:cursor-pointer bg-white px-8 py-4 rounded-md">
                    <h1 className="text-xl font-semibold">
                        {props.collection.name}
                    </h1>
                    {/* TODO: get amount of flashcards in collection */}
                    <span className="text-gray-600 text-sm">
                        10 flashcards
                    </span>{' '}
                </div>
            </Link>
            <Link href={`/collections/${props.collection.id}/settings`}>
                <div className="flex justify-between text-gray-600 text-sm p-2 hover:text-blue-600">
                    <div>Manage</div>
                    <div className="mt-1">
                        <FaCog />
                    </div>
                </div>
            </Link>
        </Card>
    );
};

export default CollectionCard;
