import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Button.css";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons/faSquareArrowUpRight";

const Button = (prop) => {
  const { text, comp } = prop;
  return (
    <button
      className={`btn-component ${comp.toLowerCase()}-comp text-uppercase`}
    >
      <div className="default-btn">
        <span>{text}</span>
        <FontAwesomeIcon icon={faSquareArrowUpRight} />
      </div>
      <div className="hover-btn">
        <span>{text}</span>
        <FontAwesomeIcon icon={faSquareArrowUpRight} />
      </div>
    </button>
  );
};

export default Button;
