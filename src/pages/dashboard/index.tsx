import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import NoLogin from '../../components/auth/NoLogin';
import Card from '../../components/UI/Card';
import Layout from '../../layouts/dashboard/Layout';

const Dashboard: NextPage = () => {
    useEffect(() => {
        fetch('/api/flashcards').then(async (response) => {
            const data = await response.json();

            console.log(data);
        });
    }, []);

    return (
        <Layout>
            <h1 className="text-2xl mb-5">LUA scripts</h1>
            <div className="flex">
                <Card name="Loyalty.lua" users={10} />
                <Card name="sapphire" users={22} />
            </div>
        </Layout>
    );
};

export default Dashboard;
