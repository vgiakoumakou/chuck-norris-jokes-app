import React from "react";

import arrowIcon from "../../assets/icons/arrow-right-beige-icon.svg";

import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <h6 className="Footer__Title">GOT JOKES? GET PAID FOR SUBMITTING!</h6>
      <a link="#" className="Footer__Link">
        <span className="Footer__LinkText">SUBMIT JOKE</span>
        <img src={arrowIcon} alt="Arrow Right" />
      </a>
    </div>
  );
}

export default Footer;
