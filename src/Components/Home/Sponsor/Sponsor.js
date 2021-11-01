import React from "react";
import "./Sponsor.css";
import spon from "../../../images/spon.png";
import spon2 from "../../../images/spon2.png";
import spon4 from "../../../images/spon (2).png";
import spon3 from "../../../images/Graphic-River.png";
import spon5 from "../../../images/codecanyon.png";

const Sponsor = () => {
  return (
    <div className="transform">
      <div className="container sm_responsive d-flex justify-content-center justify-content-between shadow-lg border-top bg-light p-4">
        <div className="border p-2 border-dark sponsor_sm_margin">
          <img src={spon} alt="" />
        </div>
        <div className="border p-2 border-dark sponsor_sm_margin">
          <img src={spon2} alt="" />
        </div>
        <div className="border p-2 border-dark sponsor_sm_margin">
          <img src={spon3} alt="" />
        </div>
        <div className="border p-2 border-dark sponsor_sm_margin">
          <img src={spon4} alt="" />
        </div>
        <div className="border p-2 border-dark sponsor_sm_margin">
          <img src={spon5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
