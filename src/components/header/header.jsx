import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { meunLinks } from "../../utils/data";

const Header = ({ url }) => {
  return (
    <>
      <div className="headerContain">
        <div className="headLogo">
          <h1>BloomByte</h1>
        </div>
        <div className="meuns">
          {meunLinks?.map((item, index) => {
            return (
              <Link to={url}>
                <p key={index}>{item.text}</p>
              </Link>
            );
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
