import React from "react";
import "./growthSection.css";
import Growth from "../../assets/growth.png";

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
          <button className="growthBtn">Learn More</button>
        </div>
        <div className="growthImg">
          <img src={Growth} alt="image" />
        </div>
      </div>
    </>
  );
};

export default GrowthSection;
