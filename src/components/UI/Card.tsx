import React from 'react';
import { FaCog } from 'react-icons/fa';

type Props = {
    name: string;
    flashcards: number;
};

const Card = (props: Props) => {
    return (
        <div className="flex flex-col hover:border-blue-600 border-2 border-gray-100 w-[15rem] mr-5 bg-gray-100 shadow-md rounded-md hover:shadow-lg hover:shadow-slate-300 hover:cursor-pointer">
            <div className="hover:cursor-pointer bg-white px-8 py-4 rounded-md">
                <h1 className="text-xl font-semibold">{props.name}</h1>
                <span className="text-gray-600 text-sm">
                    {props.flashcards} flashcards
                </span>
            </div>
            <div className="flex justify-between text-gray-600 text-sm p-2 hover:text-blue-600">
                <div>Manage</div>
                <div className="mt-1">
                    <FaCog />
                </div>
            </div>
        </div>
    );
};

export default Card;
