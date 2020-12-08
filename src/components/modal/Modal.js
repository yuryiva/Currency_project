import React from "react";
import "./Modal.css";

const Modal = (props) => (
  <div className={props.className}>
    {props.questions.map((element) => (
      <div>
        <h4>{element.question}</h4>
        <p>{element.answer} </p>
        <br />
      </div>
    ))}

    <button className="closeBtn" onClick={props.close}>
      Close
    </button>
  </div>
);

export default Modal;
