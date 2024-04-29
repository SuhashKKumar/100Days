import "../styles/EverydayListings.css";
import villa from "../assets/ellipse-7.svg";
const EverydayListings = () => {
  return (
    <div className="everyday-listings-container">
    <div className="listings-sub-container" >
    <img className="hero-listings-image" src={villa}  alt="image of an villa" />
    <p className="happy-customers-text">200+ New <br/>Listings Everyday!</p>
    </div>
    </div>
  );
};

export default EverydayListings;
