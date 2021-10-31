import React from "react";
import about from "../../../images/about.jpg";

import "./About.css";

const About = () => {
  return (
    <div className="my-5">
      <div className="container">
        <h2 className="my-3 fw-light text-uppercase text_custom border-bottom text-center">
          About us
        </h2>
        <div className="row align-items-center space-between">
          <div className="col-lg-6">
            <h1>ABOUT CUSTOM TRAVEL SOLUTIONS</h1>
            <p>
              For nearly 30 years, our founders have been building travel
              businesses and technologies that enable companies and
              organizations around the world to drive sales and boost loyalty.
            </p>
            <button className="btn btn-warning fw-normal text-uppercase">
              Know more <i class="fas fa-long-arrow-alt-right"></i>
            </button>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid" src={about} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
