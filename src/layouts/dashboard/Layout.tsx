import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { signIn, useSession } from 'next-auth/react';

type Props = {
    children: React.ReactNode;
};

const Layout = (props: Props) => {
    const { data: session } = useSession();

    if (session === null) {
        signIn();
        return <></>;
    }

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
