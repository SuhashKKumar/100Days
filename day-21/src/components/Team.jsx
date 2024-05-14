import DescriptionText from "../misc/DescriptionText";
import SecondaryHeadline from "../misc/SecondaryHeadline";
import Button from "../misc/Button";
import '../styles/Team.css';
const Team = () => {
  const description =
    "Our team is a multifaceted and passionate group of problem-solvers who know the ups and downs of early-stage growth. We're curious about the unconventional and we're not afraid to dive into the nitty-gritty of the software industry.";
  return (
    <div className="padding-container my-5 common-container">
      <div className="container-fluid py-5">
        <div className="row gap-1 justify-content-between align-items-start">
          <div className="col-12 col-lg-3">
            <SecondaryHeadline text="the zenith team" />
          </div>
          <div className="col-12 col-lg-6">
            <DescriptionText text={description} />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row align-items-start">
          <img
          className="teams-img"
            src="assets/images/allies-2.jpg"
            alt="a group of people having a meeting"
          />
        </div>
        <div className='d-flex justify-content-start my-5' >
        <Button text="meet the team" comp="primary" />
        </div>
      </div>
    </div>
  );
};

export default Team;
