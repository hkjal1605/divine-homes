import React from 'react';

import './signin-and-signup-page.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';

import NavigationButton from '../../components/navigation/navigaton.component';

const SignInAndSignUp = () => (
    <div className='signin-and-signup'>
        <NavigationButton />
        <SignIn />
    </div>
);

export default SignInAndSignUp;