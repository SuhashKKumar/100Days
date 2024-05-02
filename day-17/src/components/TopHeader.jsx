import IconWithText from "../misc/IconWithText";
import pin from "../assets/pin-icon.svg";
import phone from "../assets/phone-icon.svg";
import mail from "../assets/mail-icon.svg";
import "../styles/TopHeader.css";

const TopHeader = () => {
  return (
    <div className="header-container">
      <IconWithText text="Rezilla, 18 Grattan St, Brooklyn" icon={pin} />
      <div className="header-contact-container">
        <IconWithText text="+1 206-214-2298" icon={phone} />
        <IconWithText text="support@rezilla.com" icon={mail} />
      </div>
    </div>
  );
};

export default TopHeader;
