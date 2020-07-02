import React from 'react';

import './top-realtors.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

import { Link } from 'react-router-dom';

const TopRealtors = ({ realtors }) => {
    return(
        <div className='top-realtors'>
            <div className='top-realtors__left'>
                <h2 className='top-realtors__left--title'>TOP REALTORS AT YOUR SERVICE</h2>
                <Link to='/realtors' className='link'>
                    <CustomButton content='view all realtors' />
                </Link>
            </div>
            <div className='top-realtors__right'>
                {
                    realtors.slice(0, 3).map(realtor => (
                        <div className='top-realtors__realtor' key={realtor.email}>
                            <img src={realtor.picture.large} alt='Realtor' className='top-realtors__realtor--img' />
                            <h4 className='top-realtors__realtor--name'>{`${realtor.name.title} ${realtor.name.first} ${realtor.name.last}`}</h4>
                            <span className='top-realtors__realtor--phone'>{realtor.phone}</span>
                        </div>
                    ))
                }
            </div>
        </div>
)};

export default TopRealtors;