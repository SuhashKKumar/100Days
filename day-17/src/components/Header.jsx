import IconWithText from "../misc/IconWithText";

const Header = () => {
  return (
    <div className="header-container">
      <IconWithText>
        <img
          src="../assets/pin-icon.svg"
          alt="location-pin icon"
          className="icon"
        />
        <p className="text">Rezilla, 18 Grattan St, Brooklyn</p>
      </IconWithText>
    </div>
  );
};

export default Header;
