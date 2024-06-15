import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HowItWorksIcon from "../misc/HowItWorksIcon";

const IceBreakers = () => {
    // https://www.surfe.com/wp-content/uploads/2024/01/RIDER_OCEANSIDE_MOBILE_01_V02-1024x1156.png
  return (
    <div className="ice-breakers--container my-28">
      <div className="ice-breakers--left mx-auto text-center flex flex-col gap-9">
        <h2 className="sub-headline md:text-5xl lg:text-6x">
          Ice-breakers that
          <span className="brush-font text-light-orange-100"> CONVERT</span>
        </h2>
        <p className="text-dark-blue-100 md:w-2/3 mx-auto">
          Book more meetings with templates powered by AI. Use personalized
          Message Templates in LinkedIn messages or InMails. See which template
          has the highest reply rate and share it with your team.
        </p>
        <div className="flex flex-col items-center mx-auto gap-3 md:flex-row md:gap-12 font-semibold">
          <div className="flex items-center gap-5 text-dark-blue-200 text-lg md:text-2xl">
            <a>Try it now</a>
            <FontAwesomeIcon icon={faArrowRight} size="xs" />
          </div>
          <HowItWorksIcon />
        </div>
      </div>
      <div className="ice-breakers--right"></div>
    </div>
  );
};

export default IceBreakers;
