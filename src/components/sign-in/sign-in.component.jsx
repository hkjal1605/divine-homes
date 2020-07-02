import React from 'react';

import './sign-in.styles.scss';

import {ReactComponent as Logo} from '../../logo.svg';

import FormInput from '../form-input/form-input.component';
import SignInButton from '../custom-signin-button/custom-signin-button.component';

import { auth, signInWithGoogle } from '../firebase/firebase.utils';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch(error) {
            console.log(error);
            alert(error.message);
        }

    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='sign-in'>
                <Link to='/'>
                    <Logo className='sign-in__logo' />
                </Link>
                <span className='sign-in__text'>Sign In</span>

                <form className='sign-in__form' onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} label='Email' handleChange={this.handleChange} required />

                    <FormInput name='password' type='password' value={this.state.password} label='Password' handleChange={this.handleChange} required />

                    <div className='buttons-group'>
                        <SignInButton type='submit'> Sign In </SignInButton>
                        <SignInButton onClick={signInWithGoogle}> Sign In With Google </SignInButton>
                    </div>
                </form>

                <h4 className='sign-in__signup'>Don't have an account, <Link to='/signup' className='signin-link'>Sign Up</Link></h4>
            </div>
        )
    }
};

export default SignIn;