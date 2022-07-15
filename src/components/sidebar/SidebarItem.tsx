import Link from 'next/link';
import React from 'react';
import styles from './SidebarItem.module.css';

type Props = {
    children: React.ReactNode;
    active: boolean;
};

const SidebarItem = (props: Props) => {
    return (
        <div className="mt-9">
            <Link href="#">
                <div
                    className={`flex justify-center w-full hover:cursor-pointer ${
                        props.active ? 'text-blue-800' : 'text-gray-500'
                    }`}
                >
                    {props.active && <div className={styles.selector}></div>}
                    <span className="hover:text-blue-800 text-2xl">
                        {props.children}
                    </span>
                </div>
            </Link>
        </div>
    );
};

export default SidebarItem;
