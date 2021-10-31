import React from "react";
import { Carousel } from "react-bootstrap";
import bannerImg from "../../../images/banner.jpg";
import bannerImg2 from "../../../images/banner2.jpg";
import bannerImg3 from "../../../images/banner (2).jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item className="banner_mother">
        <img className="height w-100" src={bannerImg} alt="First slide" />
        <div className="overlay">
          <div className="container shadow-large text-light">
            <h3 className="text-uppercase fw-light mb-3">
              People don't take trips <br /> trips take people
            </h3>
            <p className="w-50 mx-auto">
              These embryonic oaks lay upon the grass, their browns a gift to
              the eyes. I could watch them a while, these acorns.their browns a
              gift to the eyes. I could watch them a while, these acorns.
            </p>
            <button className="btn btn-warning text-uppercase">
              Know more
            </button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="banner_mother">
        <img
          className="d-block w-100 height"
          src={bannerImg3}
          alt="Second slide"
        />
        <div className="overlay">
          <div className="container shadow-large text-light">
            <h3 className="text-uppercase fw-light mb-3">
              Don't Quit Your Day Dream
            </h3>
            <p className="w-50 mx-auto">
              I welcome my journey with a strong heart. I stand tall and love
              the fresh air that comes from following this ever onward road. I
              stride in bold steps, I could watch them a while, these acorns.
            </p>
            <button className="btn btn-warning text-uppercase">
              Know more
            </button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="banner_mother">
        <img
          className="d-block w-100 height"
          src={bannerImg2}
          alt="Third slide"
        />
        <div className="overlay">
          <div className="container shadow-large text-light">
            <h3 className="text-uppercase fw-light mb-3">
              We travel not to escape life <br /> but for life not to escape us.
            </h3>
            <p className="w-50 mx-auto">
              When you find your quest, the reason for your birth - when the
              song of creation that calls directly to your heart and soul. I
              could watch them a while, these acorns.
            </p>
            <button className="btn btn-warning text-uppercase">
              Know more
            </button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
