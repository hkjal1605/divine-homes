import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.styles.scss';

const NavigationButton = () => {
    return (
        <div className='navigation'>
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

                <label for="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>

                <div className="navigation__background">&nbsp;</div>

                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><Link to='/' className="navigation__link">Home</Link></li>
                        <li className="navigation__item"><Link to='/realtors' className="navigation__link">Our Realtors</Link></li>
                        <li className="navigation__item"><Link to='/city' className="navigation__link">Popular Cities</Link></li>
                        <li className="navigation__item"><Link to='/house' className="navigation__link">Popular Houses</Link></li>
                        <li className="navigation__item"><Link to='/contact' className="navigation__link">Contact</Link></li>
                    </ul>
                </nav>
        </div>
    )
};

export default NavigationButton;