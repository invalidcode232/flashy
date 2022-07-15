import React from 'react';
import { signIn } from 'next-auth/react';

type Props = {};

const LoginButton = (props: Props) => {
    return <button onClick={() => signIn()}>Sign in</button>;
};

export default LoginButton;
