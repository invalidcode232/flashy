import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color: string;
    children: React.ReactNode;
}

const OutlineButton = (props: Props) => {
    return (
        <button
            className={`outline-2 outline-${props.color} bg-white text-${props.color} p-2 rounded-md outline hover:bg-${props.color} hover:text-white`}
            {...props}
        >
            {props.children}
        </button>
    );
};

export default OutlineButton;
