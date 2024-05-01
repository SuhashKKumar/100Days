import BlueText from "../misc/BlueText";
import SecondaryHeadline from "../misc/SecondaryHeadline";
import TeamCard from "../misc/TeamCard";
import "../styles/Team.css";
const Team = () => {
  return (
    <div className="team-container padding-container">
      <BlueText text="INTRODUCING YOURSELF TO" />
      <SecondaryHeadline text="Our Team of Experts" />
      <TeamCard/>
    </div>
  );
};

export default Team;
