import { collections } from '@prisma/client';
import Link from 'next/link';
import React from 'react';
import { FaCog } from 'react-icons/fa';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const Card = (props: Props) => {
    return (
        <div
            className={`flex flex-col border-2 mr-5 shadow-md rounded-md ${props.className}`}
        >
            {props.children}
        </div>
    );
};

export default Card;
