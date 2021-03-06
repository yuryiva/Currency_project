import React from "react";
import "./Button.css";

const Button = (props) => (
  <p className="footerButton" onClick={(e) => props.onBtnClick(e)}>
    {props.name}
  </p>
);

export default Button;
