import BlueText from "../misc/BlueText";
import GreyParagraph from "../misc/GreyParagraph";
import ListingCard from "../misc/ListingCard";
import SecondaryHeadline from "../misc/SecondaryHeadline";
import "../styles/Listings.css";

const Listings = () => {
  return (
    <div className="listing-container padding-container">
      <div className="listing-sub-container">
        <div className="listing-left-container">
          <BlueText text="CHECKOUT OUR NEW" />
          <SecondaryHeadline text="Latest Listed Properties" />
          <GreyParagraph text="Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus." />
        </div>
        <div className="listing-right-container">
          <button className="btn-text-icon-secondary">All</button>
          <button className="btn-text-icon-secondary">Sell</button>
          <button className="btn-text-icon-secondary">Rent</button>
        </div>
      </div>
      <div className="listing-cards-container" >
      <ListingCard/>
      </div>
    </div>
  );
};

export default Listings;
