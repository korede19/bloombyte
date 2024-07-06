import React from "react";
import "./header.css";
import { meunLinks } from "../../utils/data";

const Header = () => {
  return (
    <>
      <div className="headerContain">
        <div className="headLogo">
          <h1>BloomByte</h1>
        </div>
        <div className="meuns">
          {meunLinks?.map((item, index) => {
            return <a key={index}>{item}</a>;
          })}
        </div>
        <div className="headbtn">
          <button>Book A Space</button>
        </div>
      </div>
    </>
  );
};

export default Header;
