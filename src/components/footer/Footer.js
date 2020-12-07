import React, { Component } from "react";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import "./Footer.css";
import Logo from "./cut.png";
import { faq } from "../modal/FaqData";
import AboutUsModal from "../modal/AboutUsModal";
import ContactUsModal from "../modal/ContactUsModal";

class Footer extends Component {
  state = {
    showAboutUs: false,
    showFaq: false,
    showContact: false,
  };

  onBtnClick = (e) => {
    this.setState({
      showAboutUs: true,
      showFaq: false,
      showContact: false,
    });
  };
  onBtnFaqClick = (e) => {
    this.setState({
      showAboutUs: false,
      showFaq: true,
      showContact: false,
    });
  };
  onBtnContactClick = (e) => {
    this.setState({
      showAboutUs: false,
      showFaq: false,
      showContact: true,
    });
  };

  onBtnClose = (e) => {
    this.setState({
      showAboutUs: false,
      showFaq: false,
      showContact: false,
    });
  };

  render() {
    //  const { show } = this.state;
    return (
      <div className="footer">
        <div className="pictureDiv"></div>
        <div className="columnDiv">
          <Button onBtnClick={this.onBtnClick} name={"About us"} />
          {this.state.showAboutUs && (
            <AboutUsModal
              className={"aboutUs"}
              about={AboutUsModal}
              close={this.onBtnClose}
            />
          )}
        </div>
        <div className="columnDiv">
          <Button onBtnClick={this.onBtnFaqClick} name={"FAQ"} />
          {this.state.showFaq && (
            <Modal className={"faq"} questions={faq} close={this.onBtnClose} />
          )}
        </div>
        <div className="columnDiv">
          <Button onBtnClick={this.onBtnContactClick} name={"Contact"} />
          {this.state.showContact && (
            <ContactUsModal
              className="contactUs"

              close={this.onBtnClose}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Footer;
