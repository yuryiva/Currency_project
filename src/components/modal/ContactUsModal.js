import React from "react";
import { ContactUsData } from "./ContactUsData";
// import "./Modal.css";
// import '../footer/Footer.css'

const ContactUsModal = (props) => {
  return (
    <div className={props.className}>
      {ContactUsData.map((element) => {
        return <p>{element}</p>;
      })}

      <button className="closeBtn" onClick={props.close}>
        Close
      </button>
    </div>
  );
};

export default ContactUsModal;
