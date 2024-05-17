import DescriptionText from "../misc/DescriptionText";
import SecondaryHeadline from "../misc/SecondaryHeadline";
import Button from "../misc/Button";
import "../styles/InvestmentPlan.css";
const InvestmentPlan = () => {
  const description =
    "We invest early in post-revenue businesses focused on solving real-world business problems. As a boutique fund, we work to build long-lasting relationships with each company in our portfolio. We see our role as going beyond funding. We’re there for the work. For the late nights. For the rollercoaster ride that is growing a business. Behind everything we do is a commitment to our ESG-principles. A great business can and should make a positive impact on our world.";
  return (
    <div className="padding-container my-5 common-container">
      <div className="container-fluid py-5">
        <div className="row justify-content-between align-items-start">
          <div className="col-12 col-xl-6 mb-xl-0 mb-3 ">
            <SecondaryHeadline text="our investment approach" />
          </div>
          <div className="col-12 col-xl-6">
            <div className="row d-flex flex-column align-items-start">
              <div className="col-12">
                <DescriptionText text={description} />
              </div>
              <div className="col-12 text-start ">
                <Button text="meet the team" comp="secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5 pb-5 ">
        <div className="row justify-content-between align-items-start">
          <div className="col-12 col-md-6 col-xl-4 mb-sm-5 order-0">
            <div className="investment-btn">
              <div className="blur-effect">
                <Button text="submit your pitch" comp="primary" />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-12 col-md-6 order-1">
            <img
              className="teams-img"
              src="assets/images/investment-1.jpg"
              alt="a group of people having a meeting"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPlan;
