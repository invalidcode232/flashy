import Link from 'next/link';
import { signIn } from 'next-auth/react';
import React from 'react';

type Props = {};

const NoLogin = (props: Props) => {
    return (
        <>
            <h1 className={'text-2xl'}>You are currently not logged in</h1>
            <span>Please click the button below to sign in.</span>
            <button onClick={() => signIn()}>Sign in</button>
        </>
    );
};

export default NoLogin;
