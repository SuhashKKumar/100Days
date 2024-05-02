import model from "../assets/brendon-cutout.svg";
import SecondaryHeadline from "../misc/SecondaryHeadline";
import GreyParagraph from "../misc/GreyParagraph";
import "../styles/Developer.css";
const Developer = () => {
  return (
    <div className="developer-container">
      <img src={model} alt="model-image" className="developer-model" />
      <div className="developer-sub-container">
        <SecondaryHeadline secondary={true} text="Become a Agent." />
        <GreyParagraph
          secondary={true}
          text="Fusce venenatis tellus a felis scelerisque. venenatis tellus a felis scelerisque."
        />
      </div>
      <button className="developer-btn">Register Now</button>
    </div>
  );
};

export default Developer;
