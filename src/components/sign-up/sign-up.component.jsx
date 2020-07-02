import React from 'react';

import './sign-up.styles.scss';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../logo.svg';

import { Link } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import SignInButton from '../custom-signin-button/custom-signin-button.component';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch(error) {
            console.log(error);
            alert(error.message);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <Link to='/'>
                    <Logo className='sign-up__logo' />
                </Link>
                <span className='sign-up__text'>Sign Up</span>

                <form className='sign-up__form' onSubmit={this.handleSubmit}>
                    <FormInput name='displayName' type='text' value={displayName} label='Name' handleChange={this.handleChange} required />

                    <FormInput name='email' type='email' value={email} label='Email' handleChange={this.handleChange} required />

                    <FormInput name='password' type='password' value={password} label='Password' handleChange={this.handleChange} required />

                    <FormInput name='confirmPassword' type='password' value={confirmPassword} label='Confirm Password' handleChange={this.handleChange} required />
                    
                    <div className='buttons-group'>
                        <SignInButton type='submit'> Sign Up </SignInButton>
                    </div>
                </form>
                
                <h4 className='sign-up__signin'>Already have an account, <Link to='/signin' className='signin-link'>Sign In</Link></h4>
    
            </div>
        )
    }
};

export default SignUp;