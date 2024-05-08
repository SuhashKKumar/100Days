import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className=" mt-5 pt-4 padding-container">
      <div className="container-fluid">
        <div className="row d-flex align-items-start ">
          <h1 className=" col-11 text-start text-uppercase">
            the birthplace of the next b2b software stars
          </h1>
          <FontAwesomeIcon
            icon={faAsterisk}
            className="col-1 col-auto hero-animation"
          />
        </div>
      </div>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-12 hero--background-video"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
