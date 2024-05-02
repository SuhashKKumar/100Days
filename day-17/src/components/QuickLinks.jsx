import IconWithText from "../misc/IconWithText";
import RezillaLogo from "../misc/RezillaLogo";
import PrimaryBtnOnlyIcon from "../misc/PrimaryBtnOnlyIcon";
import phoneIcon from "../assets/phone-icon-secondary.svg";
import mailIcon from "../assets/mail-icon-secondary.svg";
import arrow from "../assets/right-arrow.svg";
import linkedin from "../assets/linkedin-icon.svg";
import facebook from "../assets/facebook-icon.svg";
import instagram from "../assets/instagram-icon.svg";
import "../styles/QuickLinks.css";
const QuickLinks = () => {
  return (
    <div className="quick-links-container padding-container">
      <div className="contact-container">
        <RezillaLogo />
        <IconWithText
          secondary={true}
          text="2728 Hickory StreetSalt Lake City, UT 84104"
        />
        <IconWithText
          secondary={true}
          icon={phoneIcon}
          text="+1 206-214-2298"
        />
        <IconWithText
          secondary={true}
          icon={mailIcon}
          text="support@rezilla.com"
        />
      </div>
      <div className="contact-container">
        <p className="quick-links-text">Quick Links</p>
        <div className="quick-links">
          <p className="quick-link">Home</p>
          <p className="quick-link">About</p>
          <p className="quick-link">Listings</p>
          <p className="quick-link">Services</p>
          <p className="quick-link">Blogs</p>
          <p className="quick-link">Become a Agent</p>
        </div>
      </div>
      <div className="contact-container">
        <p className="quick-links-text">Discovery</p>
        <div className="quick-links">
          <p className="quick-link">Canada</p>
          <p className="quick-link">United States</p>
          <p className="quick-link">Germany</p>
          <p className="quick-link">Africe</p>
          <p className="quick-link">India</p>
        </div>
      </div>
      <div className="contact-container">
        <p className="quick-links-text">Subscribe to our Newsletter!</p>
        <div className="email-container">
          <input type="email" placeholder="Email Address" />
          <PrimaryBtnOnlyIcon icon={arrow} />
        </div>
        <p className="quick-links-text">Follow Us on</p>
        <div className="social-media-container">
          <img
            className="social-media-icon"
            alt="linkedin-icon"
            src={linkedin}
          />
          <img
            className="social-media-icon"
            alt="facebook-icon"
            src={facebook}
          />
          <img
            className="social-media-icon"
            alt="instagram-icon"
            src={instagram}
          />
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
