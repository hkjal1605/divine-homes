import React from 'react';

import './customer-reviews.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const CustomerReviews = () => (
    <div className='reviews'>
        <div className='reviews__left'>
            <h2 className='reviews__left--title'>THOSE WHO GOT THERE OWN HOMES</h2>
            <CustomButton content='view all reviews' />
        </div>

        <div className='reviews__right'>
            <h2 className='reviews__right--text'>"THE BEST PLACE TO FIND YOUR NEW HOME"</h2>
        </div>
    </div>
);

export default CustomerReviews;