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
            {/* idk why padding class doesnt work */}
            <div className="w-full" style={{ padding: '1.25rem' }}>
                <Navbar />
                <main>{props.children}</main>
            </div>
        </div>
    );
};

export default Layout;
