import BlueText from "../misc/BlueText";
import SecondaryHeadline from "../misc/SecondaryHeadline";
import ServicesCard from "../misc/ServicesCard";
import search from "../assets/serch-icon.svg";
import house from "../assets/home-icon.svg";
import bed from "../assets/bed-white-icon.svg";
import "../styles/Services.css";

const Services = () => {
  const description =
    "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. ";
  return (
      <div className="services-container">
        <BlueText text="OUR SERVICES" />
        <SecondaryHeadline text="Donec porttitor euismod dignissim" />
        <div className="service-cards-container">
          <ServicesCard
            icon={search}
            title="But a New Home"
            description={description}
          />
          <ServicesCard
            icon={house}
            title="Sell a House"
            description={description}
          />
          <ServicesCard
            icon={bed}
            title="Rent a House"
            description={description}
          />
        </div>
      </div>
    
  );
};

export default Services;
