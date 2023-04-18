import React from 'react';
import './button.css'
const Button = ({ children, type = "button", label,...rest }) => {
    return (
        <button type={type} className="submit-btn" {...rest}>{label || children}</button>
    );
};

export default Button;