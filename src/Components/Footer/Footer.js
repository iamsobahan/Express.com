import React from "react";
import foterLogo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark py-5">
      <div className="container">
        <div className="row border-bottom border-muted pb-5 mt-5">
          <div className="col-lg-3">
            <img src={foterLogo} alt="" />
          </div>
          <div className="col-lg-3">
            <li>WEEBLY THEMES</li>
            <li>PRE-SALE FAQS</li>
            <li>SUBMIT A TICKETS</li>
            <li>SERVICES</li>
            <li>THEME TWEAK</li>
          </div>
          <div className="col-lg-3">
            <li>SHOWCASE</li>
            <li>WIDGETKIT</li>
            <li>SUPPORT</li>
          </div>
          <div className="col-lg-3">
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>AFFILIATES</li>
            <li>RESOURCES</li>
          </div>
        </div>

        <div className="text-center pt-5">
          <i className="fab fa-facebook-f text-white border-warning"></i>
          <i className="fab fa-twitter text-white border-warning"></i>
          <i className="fab fa-instagram text-white border-warning"></i>
          <i className="fab fa-pinterest-p text-white border-warning"></i>
          <i className="fab fa-whatsapp text-white border-warning"></i>
        </div>
        <p className="text-center text-white pt-3">
          copyright all rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
