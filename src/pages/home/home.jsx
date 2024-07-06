import React from "react";
import "./home.css";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";

const Home = () => {
  return (
    <>
      <Header />
      <div className="heroContain">
        <Hero />
      </div>
    </>
  );
};

export default Home;
