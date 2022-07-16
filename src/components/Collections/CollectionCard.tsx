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
        <Card className="hover:border-blue-600 w-1/5 hover:shadow-lg bg-gray-100 border-gray-100 hover:shadow-slate-300 hover:cursor-pointer">
            <Link href={`/collections/${props.collection.id}`}>
                <div className="hover:cursor-pointer bg-white rounded-md py-3 px-4">
                    <h1 className="text-xl font-semibold">
                        {props.collection.name}
                    </h1>
                    <span className="text-gray-600 text-sm">10 flashcards</span>
                </div>
            </Link>
            <Link href={`/collections/${props.collection.id}/settings`}>
                <div className="flex justify-between text-gray-600 text-sm p-2 hover:text-blue-600 bg-gray-100 rounded-md">
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
