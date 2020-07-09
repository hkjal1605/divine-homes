import React from 'react';
import { Link } from 'react-router-dom';
 
import './house-card.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const HouseCard = (house) => {
    return(
    <div className='house-card'>
        <div className='house-card__content'>
            <h4 className='house-card__content--heading'>{house.house.title}</h4>
            <p className='house-card__content--description'>{house.house.description}</p>
            <div className='house-card__content--btn-group'>
                <span className='btn-group__text'>See all houses of this type</span>
                <Link to={`/house/${house.house.routeName}`} className='link'>
                    <CustomButton content='see all' btnClass='house-btn' />
                </Link>
            </div>
        </div>
        <img src={house.house.houses[0].img1} alt='house' className='house-card__img--image-large' />
        <img src={house.house.houses[0].img1} alt='house' className='house-card__img--image-small' />
    </div>
)};

export default HouseCard;