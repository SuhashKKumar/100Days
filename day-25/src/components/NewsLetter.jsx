import {
  faFrog,
  faLeaf,
  faMosquito,
  faVolcano,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewsLetter = () => {
  return (
    <div className="news-letter--container bg-dark-blue-200 text-sky-blue-200 py-12">
      <div className="mx-auto text-center md:text-start flex flex-col gap-5 w-3/5 md:w-full md:px-5 items-center md:flex-row md:justify-between ">
        <div className="news-letter--right md:order-2">
          <img src="/assets/paper-rocket.gif" className="h-[6rem]" />
        </div>
        <div className="news-letter--center flex flex-col gap-3 md:order-1 md:max-w-[50%]">
          <p className="font-semibold text-lg ">
            Join our newsletter to stay up to date on<br/>features and releases.
          </p>
          <div className="flex flex-col gap-3 md:flex-row py-3 ">
            <input
              className="bg-dark-blue-100 w-full md:w-5/5 rounded-md font-semibold text-sky-blue-200 py-2 px-4"
              type="email"
              placeholder="Email"
            />
            <button className="bg-white w-full md:w-2/5 rounded-md font-semibold text-dark-blue-200 text-start py-2 px-4">
              Sign up
            </button>
          </div>
          <p className="text-xs ">
            By subscribing you agree to with our <u>privacy policy</u> and
            provide consent to receive updates from our company.
          </p>
        </div>
        <div className="news-letter--left flex flex-col gap-3 md:order-0">
          <div className="flex gap-5 justify-center">
            <FontAwesomeIcon
              size="2xl"
              icon={faVolcano}
              style={{ color: "#bdedfc" }}
            />
            <FontAwesomeIcon
              size="2xl"
              icon={faFrog}
              style={{ color: "#bdedfc" }}
            />
            <FontAwesomeIcon
              size="2xl"
              icon={faLeaf}
              style={{ color: "#bdedfc" }}
            />
            <FontAwesomeIcon
              size="2xl"
              icon={faMosquito}
              style={{ color: "#bdedfc" }}
            />
          </div>
          <p className="text-xs ">
            <u>Say 👋🏻 at hello@surfe.com</u>
          </p>
          <p className="text-sm ">
            52 rue de la Chaussée d’Antin 75009 <br />
            Paris, France
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
