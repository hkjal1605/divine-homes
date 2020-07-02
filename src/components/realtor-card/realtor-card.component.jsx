import React from 'react';

import './realtor-card.styles.scss';

import {ReactComponent as Phone} from '../../icons/phone.svg';
import {ReactComponent as Mail} from '../../icons/mail.svg';

const RealtorCard = ({realtor}) => {
    return(
        <div className='realtor-card'>
            <img src={realtor.picture.large} alt='Realtor' className='realtor-card__img' />
            <div className='realtor-card__details'>
                <h4 className='realtor-card__details--name'>{`${realtor.name.title} ${realtor.name.first} ${realtor.name.last}`}</h4>
                <span className='realtor-card__details--experience'>EXPERIENCE: {realtor.registered.age} years</span>
                
                <div className='realtor-card__bottom'>
                    <div className='realtor-card__details--about'>
                        <span className='realtor-card__contact'>{realtor.phone}</span>
                        <Phone className='realtor-card__icon' />
                    </div>
                    <div className='realtor-card__details--about'>
                        <span className='realtor-card__contact'>{realtor.email}</span>
                        <Mail className='realtor-card__icon' />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default RealtorCard;