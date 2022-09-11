import Link from 'next/link';
import React from 'react';
import { FaPlay } from 'react-icons/fa';
import Card from '../UI/Card';

type Props = {
    header: string;
    children: React.ReactNode;
    collectionId: string;
};

const CollectionPlayCard = (props: Props) => {
    return (
        <Card className="p-3 mt-5">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-xl font-bold mb-2">{props.header}</h1>
                    <span className="text-gray-500 font-semilight">
                        {props.children}
                    </span>
                </div>
                <Link href={`/collections/${props.collectionId}/play`}>
                    <button className="bg-blue-500 hover:bg-blue-600 px-4 rounded-md text-white">
                        <FaPlay />
                    </button>
                </Link>
            </div>
        </Card>
    );
};

export default CollectionPlayCard;
