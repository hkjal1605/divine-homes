import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ content }) => (
    <button className='btn'>
        {content}
    </button>
);

export default CustomButton;