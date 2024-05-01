import "../styles/ListingCard.css";
import { ListingCardData } from "../lib/ListingCardData";
import GreyParagraph from "./GreyParagraph";
import BedsAndBath from "./BedsAndBath";
import bathIcon from "../assets/bath-icon.svg";
import bedIcon from "../assets/bed-icon.svg";

const ListingCard = () => {
  console.log(ListingCardData);

  return (
    <div className="listing-card-container">
      {ListingCardData.map(
        ({
          id,
          image,
          name,
          tag,
          icon,
          price,
          title,
          description,
          beds,
          bath,
        }) => {
          const bgImage = {
            backgroundImage: `url(${image})`,
          };
          return (
            <div key={id} className="listing-card">
              <div className="bg-image-container">
                <div className="bg-image" style={bgImage}></div>
                <div className={`tag-container ${name}`}>
                  <img className="tag-icon" src={icon} alt={tag} />
                  <p className="tag-name">{tag}</p>
                </div>
              </div>
              <p className="card-price">{price}</p>
              <p className="card-title">{title}</p>
              <GreyParagraph text={description} />
              <div className="beds-or-bath-container">
              <BedsAndBath text={beds} icon={bedIcon} />
              <BedsAndBath text={bath} icon={bathIcon} />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default ListingCard;
