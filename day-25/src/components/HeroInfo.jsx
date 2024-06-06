import { faChrome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroInfo = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-dark-blue-100 text-md text-center">
        Enabling sales productivity for
      </p>
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon
          
          icon={faChrome}
          style={{ color: "#5c818a" }}
        />
        <p className="font-bold text-dark-blue-100">20,000+ users </p>
        <p>⭐️⭐️⭐️⭐️⭐️</p>
      </div>
    </div>
  );
};

export default HeroInfo;
