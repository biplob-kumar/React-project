import React from 'react';
import './inputBox.css'
const InputBox = ({ type = "text", value, ...rest }) => {
    return (
        <input
            className='inputBox'
            type={type}
            value={value}
            {...rest}
        />
    );
};

export default InputBox;