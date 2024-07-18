import "./home.css";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import GrowthSection from "../../components/growthSection/growthSection";
import Plugin from "../../components/plugin/plugin";
import Team from "../../components/team/team";
import Footer from "../../components/footer/footer";

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
      <Footer />
    </>
  );
};

export default Home;
