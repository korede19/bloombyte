import React from "react";
import "./hero.css";
import Slider from "react-slick";

export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <div className="headerHero">
        <h1>Creative and Innovative Workspace</h1>
        <p>Innovation Juction: Where Tech Ideas Coverage</p>
        <button className="heroBtn">Book A Space</button>
      </div>
      <div className="headerHero">
        <h1>Fostering Development</h1>
        <p>Transforming Technology Byte by Byte</p>
        <button className="heroBtn">Book A Space</button>
      </div>
      <div className="headerHero">
        <h1>Colaborative Workspace</h1>
        <p>A Hub For Tech Brillance, Where Minds Flourish</p>
        <button className="heroBtn">Book A Space</button>
      </div>
    </Slider>
  );
}
