import React from 'react';
import './Button.css'

const Button = (props) => (
    <button
    onClick={(e) => props.onBtnClick(e)}
    >{props.name}</button>
    );

export default Button;