import React from "react";
import "./otherheros.css";

const OtherHeros = ({ text }) => {
  return (
    <>
      <div className="HerosContain">
        <h1>{text}</h1>
      </div>
    </>
  );
};

export default OtherHeros;
