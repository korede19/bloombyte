import React from "react";
import "./footer.css";
import Facebook from "../../svg/facebook";
import Linkedln from "../../svg/linkedln";
import Location from "../../svg/location";
import Gmail from "../../svg/gmail";
import Phone from "../../svg/phone";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerIcons">
          <h1>Follow Us</h1>
          <div className="footIcons">
            <Facebook />
            <Linkedln />
            <Facebook />
            <Linkedln />
          </div>
        </div>
        <div className="footerContact">
          <h1>Contact Us</h1>
          <div className="contactOne">
            <Location />
            <p>
              After Bridge, B11 Akaraki/Falowo Layout, Aule Rd, Opposite Cele
              Junction, Off New Aule Road, Akure
            </p>
          </div>
          <div className="contactOne">
            <Gmail />
            <p>bloombytehub@gmail.com</p>
          </div>
          <div className="contactOne">
            <Phone />
            <p>0812 396 0422</p>
          </div>
        </div>
        <div className="footerSubscribe">
          <div className="subText">
            <h1>Subscribe Now</h1>
            <p>Don’t miss our future updates! Get Subscribed Today!</p>
          </div>
          <div className="inputTab">
            <input
              type="email"
              className="mailInput"
              placeholder="Email Address"
            />
            <div className="inputbtn">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2024 BloomByte | Powered by BloomByte</p>
      </div>
    </>
  );
};

export default Footer;
