import React from "react";
import "./home.css";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import GrowthSection from "../../components/growthSection/growthSection";

const Home = () => {
  return (
    <>
      <Header />
      <div className="heroContain">
        <Hero />
      </div>
      <GrowthSection />
    </>
  );
};

export default Home;
