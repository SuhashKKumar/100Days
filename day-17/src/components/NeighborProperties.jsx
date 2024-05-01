import { NeighborPropertiesData } from "../lib/NeighborPropertiesData";
import BlueText from "../misc/BlueText";
import SecondaryHeadline from "../misc/SecondaryHeadline";
import "../styles/NeighborProperties.css";
const NeighborProperties = () => {
  return (
    <div className="neighbor-properties-container padding-container ">
      <BlueText text="AREAS ACROSS THE TOWN" />
      <SecondaryHeadline text="Neighborhood Properties" />
      <div className="neighbor-properties-grid-container">
        {NeighborPropertiesData.map(({ id, count, description }) => {
          return (
            <div
              key={id}
              className={`neighbor-grid-item neighbor-grid-item-${id}`}
            >
              <h1 className="neighbor-count">{count}</h1>
              <p className="neighbor-description">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NeighborProperties;
