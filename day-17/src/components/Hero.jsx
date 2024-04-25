import EverydayListings from "../misc/EverydayListings";
import HappyCustomers from "../misc/HappyCustomers";
import "../styles/Hero.css";
import HeroLeftContainer from "./HeroLeftContainer";
import HeroRightContainer from "./HeroRightContainer";
const Hero = () => {
  return (
    <div className="hero-main-container">
      <div className="hero-sub-container">
        <HeroLeftContainer />
        <HeroRightContainer />
      </div>
      <div className="hero-second-sub-container">
      <HappyCustomers />
      <EverydayListings/>
      </div>
    </div>
  );
};

export default Hero;
