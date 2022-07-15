import React from 'react';

type Props = {
    children: React.ReactNode;
};

const ShadowButton = (props: Props) => {
    return (
        <button
            className={
                'p-3 shadow-lg mx-2 text-gray-500 hover:text-blue-600 hover:cursor-pointer'
            }
        >
            {props.children}
        </button>
    );
};

export default ShadowButton;
