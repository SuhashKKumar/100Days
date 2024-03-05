import "../styles/Button.css";
import rightArrow from "../assets/right-arrow.svg";
const Button = (prop) => {
  const { styleName , text} = prop;
  return (
    <button className={styleName}>
      <p className="btn-text">{text}</p>
      <img
        src={rightArrow}
        alt="instagram-icon"
        className="btn-icon"
        width={40}
        height={40}
      />
    </button>
  );
};

export default Button;
