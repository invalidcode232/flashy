import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';

type Props = {
    children: React.ReactNode;
};

const Layout = (props: Props) => {
    return (
        <div className="flex">
            <Sidebar />
            <div
                style={{
                    position: 'relative',
                    marginLeft: '7rem',
                    marginTop: '1rem',
                    width: '100%',
                    overflowY: 'scroll',
                }}
            >
                <Navbar />
                <main>{props.children}</main>
            </div>
        </div>
    );
};

export default Layout;
