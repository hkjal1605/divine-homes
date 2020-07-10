import React from 'react';

import { connect } from 'react-redux';

import './main.styles.scss';

import {ReactComponent as Logo} from '../../logo.svg';
import {ReactComponent as BbcLogo} from '../../icons/bbc.svg';
import {ReactComponent as BusinessLogo} from '../../icons/Business-Insider-01.svg';
import {ReactComponent as ForbesLogo} from '../../icons/Forbes-01.svg';
import {ReactComponent as NbcsnLogo} from '../../icons/NBCSN-01.svg';

import { auth } from '../firebase/firebase.utils';

import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import SearchBox from '../search-box/search-box.component';

const MainContent = ({ currentUser }) => (
    <div className='main'>
        <div className='main__header'>
            <Logo className='main__header--logo' />
            <div className='main__header--options'>
                <Link to='/' className='link'>
                    <h3 className='main__links hvr-float hvr-underline-from-center'>Home</h3>
                </Link>
                <Link to='/house' className='link'>
                    <h3 className='main__links hvr-float hvr-underline-from-center'>Properties</h3>
                </Link>
                <Link to='/realtors' className='link'>
                    <h3 className='main__links hvr-float hvr-underline-from-center'>Our Realtors</h3>
                </Link>
                {
                    currentUser ? 
                        (<div className='main__links hvr-float hvr-underline-from-center' onClick={() => auth.signOut()}>Sign Out</div>
                    ) : (
                        <Link to='/signin' className='link'>
                            <h3 className='main__links hvr-float hvr-underline-from-center'>Sign In/ Sign Up</h3>
                        </Link>
                    )
            
                }
                <Link to='/contact' className='link'>
                    <h3 className='main__links hvr-float hvr-underline-from-center'>Contact</h3>
                </Link>
            </div>
        </div>

        <div className='main__content'>
            <h1 className='main__content--title'>DIVINE HOMES</h1>
            <p className='main__content--tagline'>Get Ultimate Personal Freedom In Your Own Home</p>
            <div className='main__content--links'>
                <Link to='/house' className='link'>
                    <CustomButton content='Find your home' btnClass='main__content--btn' />
                </Link>
                <SearchBox />
            </div>
        </div>
        <div className='main__seenon--text'>SEEN ON</div>
        <div className='main__seenon--logo'>
            <BbcLogo className='main__logo-img' />
            <BusinessLogo className='main__logo-img' />
            <ForbesLogo className='main__logo-img' />
            <NbcsnLogo className='main__logo-img' />
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(MainContent);