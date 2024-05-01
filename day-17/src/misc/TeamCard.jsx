import { TeamData } from "../lib/TeamData";
import "../styles/TeamCard.css";
const TeamCard = () => {
  return (
    <div className="team-cards-container">
      {TeamData.map(({ id, image, name, designation }) => {
        return (
          <div key={id} className="team-card">
            <img src={image} className="person-image" alt={`${name}'s image`} />
            <p className="person-name">{name}</p>
            <p className="person-designation">{designation}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TeamCard;
