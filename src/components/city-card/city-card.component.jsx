import React from 'react';
import { Link } from 'react-router-dom';

import './city-card.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const CityCard = (city) => {
    return(
    <div className='city-card'>
        <div className='city-card__content'>
            <h4 className='city-card__content--heading'>{city.city.title}</h4>
            <p className='city-card__content--description'>{city.city.description[0].completeDescription}</p>
            <div className='city-card__content--btn-group'>
                <span className='btn-group__text'>Know more why to have a home in this city</span>
                <Link to={`/city/${city.city.title.toLowerCase()}`} className='city-btn-link'>
                    <CustomButton content='Know more' btnClass='city-btn' />
                </Link>
            </div>
        </div>
        <img src={city.city.description[0].img1} alt='city' className='city-card__img--image-large' />
        <img src={city.city.description[0].img1} alt='city' className='city-card__img--image-small' />
    </div>
)};

export default CityCard;