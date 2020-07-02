import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps}) => (
    <div className='form-group'>
        <input placeholder={label} className='form-group__input' onChange={handleChange} {...otherProps} />
        {
            label ? (
                <label className='form-group__label'>
                    {label}
                </label>
            ) : null
        }
    </div>
);

export default FormInput;