import React from "react";
import "./Answer.css";

const Answer = (props) => (
  <>
    {props.answer.map((object, index) => (
      <div key={index}>
        <p className='titlesClasses'>{object.title}</p>   
        <p className="text">{object.text}</p>
      </div>
    ))}
  </>
);

// {object.titleClass}   
export default Answer;
