import React from 'react';
import { signIn } from 'next-auth/react';

const LoginButton = () => {
    return <button onClick={() => signIn()}>Sign in</button>;
};

export default LoginButton;
