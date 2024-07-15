import "./home.css";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import GrowthSection from "../../components/growthSection/growthSection";
import Plugin from "../../components/plugin/plugin";
import Team from "../../components/team/team";

const Home = () => {
  return (
    <>
      <Header />
      <div className="heroContain">
        <Hero />
      </div>
      <GrowthSection />
      <Plugin />
      <Team />
    </>
  );
};

export default Home;
