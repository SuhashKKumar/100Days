import { AlliesCardData } from "../lib/AlliesCardData";
import AlliesCard from "../misc/AlliesCard";
import "../styles/Allies.css";

const Allies = () => {
  return (
    <div className="  padding-container my-5 common-container">
      <div className="parallax-text "></div>
      <div className="row allies-container">
        <div className="d-flex flex-column uneven-position">
          {AlliesCardData.map(({ id, img, description }) => {
            return (
              <div key={id} className="col-12">
                <AlliesCard img={img} description={description} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Allies;
