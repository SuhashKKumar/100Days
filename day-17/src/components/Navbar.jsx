import PrimaryBtnWithIcon from "../misc/PrimaryBtnWithIcon";
import RezillaLogo from "../misc/RezillaLogo";
import home from "../assets/rezillz-logo-sm.svg";
import homeHoverIcon from "../assets/rezillz-logo-primary-sm.svg";
import SecondaryBtnWithIcon from "../misc/SecondaryBtnWithIcon";
import userIcon from "../assets/user-circle-icon.svg";
import "../styles/Navbar.css";

const Navbar = () => {

  return (
    <nav className="nav-container">
      <ul className="nav-links">
        <li className="nav-link">Home</li>
        <li className="nav-link">About</li>
        <li className="nav-link">Listings</li>
        <li className="nav-link">Services</li>
        <li className="nav-link">Blogs</li>
      </ul>
      <div className="nav-section">
        <RezillaLogo className="navbar-logo" />
        <div className="login-register">
          <SecondaryBtnWithIcon text="Login/Register" icon={userIcon} />
          <PrimaryBtnWithIcon
            text="Add Listing"
            hoverIcon={homeHoverIcon}
            icon={home}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
