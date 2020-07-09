import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ content, btnClass }) => (
    <button className={`btn ${btnClass}`}>
        {content}
    </button>
);

export default CustomButton;