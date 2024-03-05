import "../styles/Hero.css";
import Button from "./Button";
import NavBar from "./NavBar";
import SocialMediaICons from "./SocialMediaICons";
const Hero = () => {
  return (
    <div className="mega-container">
      <div className="hero-container">
        <NavBar />
        <div className="hero-sub-container">
          <div className="left-container">
            <h2 className="side-headline">NON FUNGIBLE</h2>
            <h1 className="main-headline">CULTURE</h1>
            <p className="hero-para">
              Non-Fungible Tokens define the essence of Web3, while in the realm
              of luxury couture, it&apos;s all about Non-Fungible
              Culture&trade;. These uniwue creations embody unparalleled
              craftsmanship, artistic expression and individually luxusy in the
              fashion world.
            </p>
            <Button styleName="btn nav-btn" text='Discover Now' />
             
          </div>
          <div className="right-container"></div>
        </div>
      </div>
      <SocialMediaICons/>
    
    </div>
  );
};

export default Hero;
