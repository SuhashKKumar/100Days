import '../styles/IconWithText.css'

const IconWithText = (prop) => {
  const { text, icon, secondary } = prop;
  return (
    <div className="icon-with-text">
    {
      icon&&
      <img src={icon} alt="location-pin-icon" className="icon" />
    }
      <p className={`${secondary? "white-text":"text"}`}>{text}</p>
    </div>
  );
};

export default IconWithText;
