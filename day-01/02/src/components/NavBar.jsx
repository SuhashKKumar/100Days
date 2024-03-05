import "../styles/NavBar.css";
import Button from "./Button";
const NavBar = () => {
  return (
    
      <div className="nav-container">
        <div className="nav-items">
          <li className=" nav-logo">NFC</li>
          <div className="items-list">
            <li className="nav-item">About</li>
            <li className="nav-item">Collections</li>
            <li className="nav-item">Delivery</li>
            <li className="nav-item">Roadmap</li>
          </div>
        </div>
        <Button styleName="btn nav-btn" text='Mint Now' />
      </div>
    
  );
};

export default NavBar;
