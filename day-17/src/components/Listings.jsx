import BlueText from "../misc/BlueText";
import GreyParagraph from "../misc/GreyParagraph";
import SecondaryHeadline from "../misc/SecondaryHeadline";
import '../styles/Listings.css'

const Listings = () => {
  return (
    <div className="listings-container padding-container">
      <BlueText text="CHECKOUT OUR NEW" />
      <SecondaryHeadline text="Latest Listed Properties" />
      <GreyParagraph text="Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus." />
    </div>
  );
};

export default Listings;
