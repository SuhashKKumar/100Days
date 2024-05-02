import BlueText from "../misc/BlueText";
import GreyParagraph from "../misc/GreyParagraph";
import SecondaryHeadline from "../misc/SecondaryHeadline";
import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";
import PrimaryBtnOnlyIcon from "../misc/PrimaryBtnOnlyIcon";
import TestimonialsCard from "../misc/TestimonialsCard";
import "../styles/Testimonials.css";
const Testimonials = () => {
  return (
    <div className="testimonials-container padding-container">
      <div className="testimonials-left-container">
        <BlueText text="TESTIMONIALS" />
        <SecondaryHeadline text="Look What Our Customers Say!" />
        <GreyParagraph text="Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque." />
        <div className="arrows-container">
          <PrimaryBtnOnlyIcon icon={leftArrow} />
          <PrimaryBtnOnlyIcon icon={rightArrow} />
        </div>
      </div>
      <div className="testimonials-right-container">
      <TestimonialsCard/>
      </div>
    </div>
  );
};

export default Testimonials;
