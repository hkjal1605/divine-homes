import React from 'react';

import './contact-page.styles.scss';

import MyPhoto from '../../images/IMG-20190530-WA0000 (2).jpg';

import NavigationButton from '../../components/navigation/navigaton.component';

const ContactPage = () => {
    return (
        <div className='contact-page'>
            <NavigationButton />
            <h1 className='contact-page__heading'>CONTACT ME</h1>
            <div className='contact-page__aboutme'>
                <div className='contact-page__right'>
                    <p className='contact-page__right--text'>Hi, I am Harsh Kumar Jha.<br />This project is meant to be a part of one of my portfolio projects, and is meant only for demonstration purposes. All the information, contacts and photos provided on the website have been taken from the internet. The photos of the cities and the houses have been taken from Pixabay.</p>
                </div>
                <div className='contact-page__left'>
                    <img src={MyPhoto} alt='Myself' className='contact-page__left--img' />
                </div>
            </div>

            <div className='contact-page__bottom'>
                <h4 className='contact-page__bottom--text'>Intersted in working with me. Contact me here</h4>
                <div className='contact-page__bottom--contact'>
                    <span className='contact-page__phone'>Call me on:  +91 8986623661</span>
                    <span className='contact-page__email'>Mail me on:  hkjal1605@gmail.com</span>
                </div>
            </div>

            <div className='contact-page__follow-buttons'>
                <ul> 
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100009396904890">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fa fa-facebook"></span>
                    </a> 
                </li>
                <li>
                    <a href="https://twitter.com/HarshKu49481888">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fa fa-twitter"></span>
                    </a> 
                </li>
                <li>
                    <a href="https://www.instagram.com/harsh.hkj/">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fa fa-instagram"></span>
                    </a> 
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/harsh-kumar-jha-6a3360194/">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fa fa-linkedin"></span>
                    </a> 
                </li>
                </ul>  
            </div>
        </div>
    )
};

export default ContactPage;