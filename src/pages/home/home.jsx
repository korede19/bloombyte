import React from "react";
import "./home.css";
import Header from "../../components/header/header";
import GrowthSection from "../../components/growthSection/growthSection";
import Plugin from "../../components/plugin/plugin";
import Team from "../../components/team/team";
import Footer from "../../components/footer/footer";
import MySlider from "../../components/slider/slider";

const Home = () => {
  return (
    <>
      <Header />
      <MySlider />
      <GrowthSection />
      <Plugin />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
