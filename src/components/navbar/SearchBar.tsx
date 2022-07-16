import React from 'react';
import { FaSearch } from 'react-icons/fa';

type Props = {};

const SearchBar = (props: Props) => {
    return (
        <div className="flex items-center flex-shrink-0 text-white mr-6 w-full">
            <span className="text-gray-400 mr-2">
                <FaSearch />
            </span>
            <input
                className="bg-white appearance-none border-2 border-white rounded w-[25vw] py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-400"
                type="text"
                placeholder="Search anything.."
            />
        </div>
    );
};

export default SearchBar;
