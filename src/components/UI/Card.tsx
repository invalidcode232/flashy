import { collections } from '@prisma/client';
import Link from 'next/link';
import React from 'react';
import { FaCog } from 'react-icons/fa';

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Card = (props: Props) => {
    return (
        <div
            className={`flex flex-col border-2 border-gray-100 mr-5 bg-gray-100 shadow-md rounded-md ${props.className}`}
        >
            {props.children}
        </div>
    );
};

export default Card;
