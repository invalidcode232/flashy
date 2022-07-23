import React from 'react';
import { FaHome, FaCog, FaLightbulb } from 'react-icons/fa';
import { AiFillThunderbolt } from 'react-icons/ai';
import SidebarItem from './SidebarItem';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="w-[5rem] h-screen bg-gray-100 text-blue-500 border-gray-200 border-r-[1px] p-3 fixed">
            <Link href="/dashboard">
                <div className="text-5xl font-bold mt-3 hover:cursor-pointer">
                    <AiFillThunderbolt />
                </div>
            </Link>

            <SidebarItem active={true} href={'/dashboard'}>
                <FaHome />
            </SidebarItem>

            <SidebarItem active={false} href={'#'}>
                <FaLightbulb />
            </SidebarItem>

            <SidebarItem active={false} href={'#'}>
                <FaCog />
            </SidebarItem>
        </div>
    );
};

export default Sidebar;
