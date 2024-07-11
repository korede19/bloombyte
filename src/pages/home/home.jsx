import React from "react";
import "./home.css";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import GrowthSection from "../../components/growthSection/growthSection";
import Plugin from "../../components/plugin/plugin";

const Home = () => {
  return (
    <>
      <Header />
      <div className="heroContain">
        <Hero />
      </div>
      <GrowthSection />
      <Plugin />
    </>
  );
};

export default Home;
