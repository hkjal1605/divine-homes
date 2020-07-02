import React from 'react';

import './custom-signin-button.styles.scss';

const SignInButton = ({ children, ...otherProps }) => (
    <button className='signin-button' {...otherProps}>
        {children}
    </button>
);

export default SignInButton;