import AboutUsCard from "../misc/AboutUsCard";
import BlueText from "../misc/BlueText";
import GreyParagraph from "../misc/GreyParagraph";
import SecondaryHeadline from "../misc/SecondaryHeadline";
import smartHome from "../assets/smart-home-icon.svg";
import house1 from "../assets/house-interior-1.svg";
import house2 from "../assets/house-interior-2.svg";
import house3 from "../assets/house-interior-3.svg";
import "../styles/AboutUs.css";
const AboutUs = () => {
  const houses = [house1, house2, house3];
  return (
    <div className="aboutus-container padding-container">
      <div className="aboutus-left-container">
        <BlueText text="WHO ARE WE" />
        <SecondaryHeadline text="Assisting individuals in locating the appropriate real estate." />
        <GreyParagraph text="Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat." />
        <AboutUsCard
          icon={smartHome}
          blueText="Donec Porttitor eusimod"
          greyText="Nullam a lacinia ipsum, nec dignissim purus. Nulla"
        />
        <AboutUsCard
          icon={smartHome}
          blueText="Donec Porttitor eusimod"
          greyText="Nullam a lacinia ipsum, nec dignissim purus. Nulla"
        />
      </div>
      <div className="aboutus-right-container">
        {houses.map((house, index) => (
          <img
            key={index}
            src={house}
            className={`aboutus-house-${index + 1}`}
            alt={`house-${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
