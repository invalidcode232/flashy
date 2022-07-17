import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

const Home: NextPage = () => {
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <>
                Signed in as {session.user.email} <br />
                Go to
                <Link href="/dashboard">
                    <span className="text-blue-500 mx-1 hover:cursor-pointer hover:underline">
                        dashboard
                    </span>
                </Link>{' '}
                <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    );
};

export default Home;
