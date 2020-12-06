import React from "react";
import { Link } from "react-router-dom";
import './Question.css'

const Question = (props) => (
  <div onClick={props.action} className='question'>
    <Link to={props.where}>{props.question}</Link>
  </div>
);

export default Question;
