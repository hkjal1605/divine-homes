import React from 'react';

import { ReactComponent as Location } from '../../icons/location.svg';
import { ReactComponent as Area } from '../../icons/area.svg';
import { ReactComponent as Bed } from '../../icons/bed.svg';
import { ReactComponent as Bath } from '../../icons/bathroom.svg';
import { ReactComponent as Price } from '../../icons/money.svg';

import CustomButton from '../custom-button/custom-button.component';

import './individual-house-card.styles.scss';

const IndividualHouseCard = ({ house }) => {
    return (
        <div className='individual-house-card'>
            <img src={house.img1} alt='House' className='individual-house-card__img' />
            <CustomButton content='Book an appointement' btnClass='house-card-btn' />
            <div className='individual-house-card__content'>
                <div className='individual-house-card__content--location'>
                    <Location className='individual-house-card__icon' />
                    <h5 className='individual-house-card__text'>{`Location: ${house.city}`}</h5>
                </div>
                <div className='individual-house-card__content--area'>
                    <Area className='individual-house-card__icon' />
                    <h5 className='individual-house-card__text'>{`Area: ${house.area}`}</h5>
                </div>
                <div className='individual-house-card__content--bed'>
                    <Bed className='individual-house-card__icon' />
                    <h5 className='individual-house-card__text'>{`Bedroom: ${house.bed}`}</h5>
                </div>
                <div className='individual-house-card__content--bath'>
                    <Bath className='individual-house-card__icon' />
                    <h5 className='individual-house-card__text'>{`Bathroom: ${house.bath}`}</h5>
                </div>
                <div className='individual-house-card__content--price'>
                    <Price className='individual-house-card__icon' />
                    <h5 className='individual-house-card__text'>{`Price: ${house.price}`}</h5>
                </div>
            </div>
        </div>
    )
};

export default IndividualHouseCard;