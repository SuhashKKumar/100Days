import "../styles/AboutUsCard.css";
import GreyParagraph from "./GreyParagraph";
const AboutUsCard = (prop) => {
  const { icon, blueText, greyText } = prop;
  return (
    <div className="about-us-card-container">
      <img className="about-us-icon" src={icon} alt={`${blueText}-icon`} />
      <div className="about-us-text-container">
        <p className="about-us-blue" >{blueText}</p>
        <GreyParagraph text={greyText} />
      </div>
    </div>
  );
};

export default AboutUsCard;
