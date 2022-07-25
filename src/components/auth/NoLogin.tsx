import { signIn } from 'next-auth/react';
import React from 'react';

const NoLogin = () => {
    return (
        <>
            <h1 className={'text-2xl'}>You are currently not logged in</h1>
            <span>Please click the button below to sign in.</span>
            <button onClick={() => signIn()}>Sign in</button>
        </>
    );
};

export default NoLogin;
