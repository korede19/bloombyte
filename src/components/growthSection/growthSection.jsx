import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./growthSection.css";
import Growth from "../../assets/growth.png";
import Counter from "../counter/counter";
import Icon1 from "../../assets/icons8.png";
import Icon2 from "../../assets/icons9.png";

const GrowthSection = () => {
  return (
    <>
      <div className="growthContain">
        <div className="growthText">
          <h1>A Hub For Growth</h1>
          <p>
            BloomByte hub has a vision to shape the future of the tech space
            from Akure, Ondo state to the utmost part of Nigeria and Africa. We
            are on a mission, to see every young Nigerian equipped with at least
            a digital skill.
          </p>
          <Link to="/about">
            <button className="growthBtn">Learn More</button>
          </Link>
        </div>
        <div className="growthImg">
          <img src={Growth} alt="image" />
        </div>
      </div>
      <div className="counter">
        <div className="count1">
          <img src={Icon1} alt="" />
          <Counter count={159} text="Visitors" />
        </div>
        <div className="count1">
          <img src={Icon1} alt="" />
          <Counter count={20} text="Projects" />
        </div>
      </div>
    </>
  );
};

export default GrowthSection;
