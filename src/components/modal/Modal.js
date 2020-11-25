import React from 'react';
import Button from '../button/Button';
import './Modal.css';

const Modal = (props) => (
    <div className={props.className}>
    <p>{props.text1}</p>
    <p>{props.text2}</p>
    <p>{props.text3}</p>
    <p>{props.text4}</p>
    <button onClick={props.close}>Close</button>
    </div>
)

export default Modal;