import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HowItWorksIcon from "../misc/HowItWorksIcon";
import { useEffect } from "react";

const HowItWorks = () => {
  useEffect(() => {
    const parallaxContainer = document.querySelector(".how-it-works--right");
    parallaxContainer.addEventListener("scroll", () => {
      parallaxContainer.classList.add("scroll");
    });
  }, []);

  return (
    <div className="flex flex-col gap-9 text-center my-28 items-center mx-auto px-6 w-full lg:flex-row lg:justify-between lg:items-center ">
      <div className="how-it-works--left flex flex-col gap-6 items-center lg:w-1/2">
        <h2 className="font-bold text-dark-blue-200 text-4xl md:text-5xl">
          One click.<span className="brush-font text-sky-blue-300"> DONE</span>
        </h2>
        <p className="text-dark-blue-100 md:text-lg">
          Add prospects to your CRM and access their info directly from
          LinkedIn. No more tab switching!
        </p>
        <p className="text-dark-blue-100 md:text-lg">
          Craving more speed? Export your lists from Sales Navigator in 1 click
          -Surfe additionally enriches the data in the process!
        </p>
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-12 font-semibold">
          <div className="flex items-center gap-5 text-dark-blue-200 text-lg md:text-2xl">
            <a>Try it now</a>
            <FontAwesomeIcon icon={faArrowRight} size="xs" />
          </div>
          <HowItWorksIcon />
        </div>
      </div>
      <div className="how-it-works--right relative  overflow-hidden lg:w-1/2">
        <div className="background">
          <img
            className="bg-fixed inset-0 object-cover w-[35rem] "
            src="https://www.surfe.com/wp-content/uploads/2024/01/MIA-TIDES_01-1024x890.png"
          />
        </div>
        <div className="foreground relative z-10">
          <img
            src="/assets/hand-drawn-arrow.svg"
            alt="Foreground Image 1"
            className="parallax-1  absolute top-1/2 left-1/2 w-1/4 object-cover -translate-x-1/2 -translate-y-1/2 "
          />
          <img
            src="/assets/linkedIn-logo.png"
            alt="Foreground Image 2"
            className="parallax-2 -rotate-90 bg-blue-500 rounded-t-lg absolute -top-[25rem] left-[32rem] w-2/12 object-cover -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
