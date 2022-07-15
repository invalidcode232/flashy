import React from 'react';

type Props = {
    children: React.ReactNode;
};

const NavbarSegment = (props: Props) => {
    return (
        <div className="flex items-center flex-shrink-0 mr-6">
            {props.children}
        </div>
    );
};

export default NavbarSegment;
