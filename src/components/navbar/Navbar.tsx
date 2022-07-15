import React from 'react';
import NavbarButtons from './NavbarButtons';
import NavbarSegment from './NavbarSegment';
import SearchBar from './SearchBar';

type Props = {};

const Navbar = (props: Props) => {
    return (
        <nav className="flex justify-between flex-row flex-wrap text-black w-full mb-7">
            <NavbarSegment>
                <SearchBar />
            </NavbarSegment>

            <NavbarSegment>
                <NavbarButtons />
            </NavbarSegment>
        </nav>
    );
};

export default Navbar;
