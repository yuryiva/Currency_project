import React from "react";
import "./Modal.css";

const Modal = (props) => (
  <div className={props.className}>
    <p>{props.text1}</p>
    <p>{props.text2}</p>
    <p>{props.text3}</p>
    <p>{props.text4}</p>
    {/* <p>{props.text5}</p>
    <p>{props.text6}</p>
    <p>{props.text7}</p>
    <p>{props.text8}</p> */}
    {props.questions.map((element) => (
      <div>
        <h4>{element.question}</h4>
        <p>{element.answer} </p>
        <br/>
      </div>
    ))}

    <button className="closeBtn" onClick={props.close}>
      Close
    </button>
  </div>
);

export default Modal;
