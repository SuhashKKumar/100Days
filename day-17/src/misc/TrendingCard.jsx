import { TrendingData } from "../lib/TrendingData";
import rightArrow from "../assets/right-arrow.svg";
import "../styles/TrendingCard.css";
import SecondaryBtnOnlyIcon from "./SecondaryBtnOnlyIcon";
const TrendingCard = () => {
  return (
    <div className="trending-card-container">
      {TrendingData.map(({ id, image, date, day, title, description }) => {
        return (
          <div key={id} className="trending-card">
          <img
          className="trending-image"
          src={image}
          alt={title.slice(0, 10)}
          />
          <div className="date-container">
            <p className="trending-date">{date}</p>
            <p className="trending-day">{day}</p>
          </div>
            <p className="trending-title">{title}</p>
            <p className="trending-description">{description}</p>
            <SecondaryBtnOnlyIcon icon={rightArrow} />
          </div>
        );
      })}
    </div>
  );
};

export default TrendingCard;
