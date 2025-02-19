import React from 'react';
import '../../App.css';

const Button = ({ children, ...props }) => (
    <button className="button" {...props}>{children}</button>
);

export default Button;
