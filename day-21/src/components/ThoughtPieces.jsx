import DescriptionText from "../misc/DescriptionText";
import SecondaryHeadline from "../misc/SecondaryHeadline";
import "../styles/ThoughtPieces.css";
import Articles from "./Articles";
const ThoughtPieces = () => {
  const description =
    "We love to solve problems and sharing ideas is integral to how we do it.";
  return (
    <div className="padding-container my-5">
      <div className="container-fluid py-5">
        <div className="row justify-content-between align-items-start">
          <div className="col-12 col-lg-5">
            <SecondaryHeadline text="thought pieces" />
          </div>
          <div className="col-12 col-lg-6">
            <DescriptionText text={description} />
          </div>
        </div>
      </div>
      <Articles/>
    </div>
  );
};

export default ThoughtPieces;
