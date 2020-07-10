import React from 'react';

import './sign-up-page.styles.scss';

import SignUp from '../../components/sign-up/sign-up.component';

import NavigationButton from '../../components/navigation/navigaton.component';

const SignUpPage = () => (
    <div className='signup-page'>
        <NavigationButton />
        <SignUp />
    </div>
);

export default SignUpPage;