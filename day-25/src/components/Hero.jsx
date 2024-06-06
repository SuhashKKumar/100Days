import {  faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faFrog,
  faLeaf,
  faMosquito,
  faSpider,
  faVolcano,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubHero from "./SubHero";

const Hero = () => {
  return (
    <div className="hero-container flex px-4 flex-col items-center gap-5 py-10 bg-sky-blue-50 md:gap-8 md:py-24">
      <img src="/assets/paper-rocket.gif" className="self-end w-[20rem]" />

      <div className="flex text-[31px] md:text-[38px] font-bold justify-center text-dark-blue-200">
        <p className="text-center tracking-[0.02rem] leading-[2.2rem] ">
          Linked
          <FontAwesomeIcon
            className="rotate-12 ms-1 me-2"
            icon={faLinkedin}
            size="sm"
          />
          prospecting, streamlined
        </p>
      </div>
      <div className="flex flex-col gap-3 items-center md:flex-row md:gap-5 ">
        <p className="text-dark-blue-100 text-lg">
          Capture, sync, and enrich contact to
        </p>
        <div className="imgs-container flex items-center gap-2 ">
          <FontAwesomeIcon
            size="2xl"
            icon={faSpider}
            style={{ color: "#063842" }}
          />
          <FontAwesomeIcon
            size="2xl"
            icon={faVolcano}
            style={{ color: "#063842" }}
          />
          <FontAwesomeIcon
            size="2xl"
            icon={faFrog}
            style={{ color: "#063842" }}
          />
          <FontAwesomeIcon
            size="2xl"
            icon={faLeaf}
            style={{ color: "#063842" }}
          />
          <FontAwesomeIcon
            size="2xl"
            icon={faMosquito}
            style={{ color: "#063842" }}
          />
        </div>
      </div>
      <button className=" free-btn w-full py-[10px] md:w-fit md:px-6">
        Start for free
      </button>
      <p className="text-[14px] text-dark-blue-100 hidden md:block">
        No credit card required . GDPR Complaint . ISO27001 Certified
      </p>
      <SubHero/>
    </div>
  );
};

export default Hero;
