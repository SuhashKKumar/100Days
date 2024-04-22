import '../styles/IconWithText.css'

const IconWithText = (prop) => {
  const { text, icon } = prop;
  return (
    <div className="icon-with-text">
      <img src={icon} alt="location-pin-icon" className="icon" />
      <p className="text">{text}</p>
    </div>
  );
};

export default IconWithText;
