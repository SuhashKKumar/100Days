import EverydayListings from "../misc/EverydayListings";
import HappyCustomers from "../misc/HappyCustomers";
import HeroLeftContainer from "./HeroLeftContainer";
import HeroRightContainer from "./HeroRightContainer";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className="hero-main-container">
      <div className="hero-sub-container padding-container">
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
