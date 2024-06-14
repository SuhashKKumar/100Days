import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HowItWorksIcon from "../misc/HowItWorksIcon";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Databases = () => {
  return (
    <div className="databases-container text-center w-[88%] mx-auto lg:w-[67%] flex flex-col items-center">
      <div className="databases-container--top flex flex-col gap-9 items-center">
        <h2 className="sub-headline md:text-5xl lg:text-6x">
          15+ databases,
          <span className="brush-font text-light-rose-200"> ONE SEARCH</span>
        </h2>
        <div>
          <p className="paragraph">
            Get verified emails and phone numbers from LinkedIn profile. our
            cascade engine searches through 15+ premium vendors, including
            Apollo, Hunter, RocketReach & Dropcontact.
          </p>
          <p className="paragraph">
            Already have a provided? Connect it directly!
          </p>
        </div>
        <div className="font-semibold flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <p className="text-dark-blue-200 text-lg hover:opacity-70 cursor-pointer">Try it now </p>
            <p className="text-light-rose-300 bg-light-rose-50 rounded-md font-medium text-sm p-1">
              20 free credits
            </p>
            <FontAwesomeIcon icon={faArrowRight} size="xs" />
          </div>
          <HowItWorksIcon />
        </div>
      </div>
      <div className="databases-container--bottom">
        <img src="programming.gif" alt="GIF goes here"></img>
      </div>
    </div>
  );
};

export default Databases;
