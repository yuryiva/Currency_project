import React from "react";
import { AboutUsData } from "./AboutUsData";
// import "../footer/Footer.css";
// import './Modal.css'


const AboutUsModal = (props) => {
  return (
    <div className={props.className}>
      {AboutUsData.map((element) => {
        return <p>{element}</p>;
      })}

      <button className="closeBtn" onClick={props.close}>
        Close
      </button>
    </div>
  );
};

export default AboutUsModal;
