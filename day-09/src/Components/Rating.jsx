import { useState } from "react";
import star from "../assets/icon-star.svg";
import "./Rating.css";

const Rating = (prop) => {
  const { setRating } = prop;
  const [number, setNumber] = useState(0);
  const handleRating = () => {
    setRating(number);
  };

  return (
    <div className="rating-container">
      <div className="star-icon">
        <img src={star} alt="star-icon" width="20px" />
      </div>
      <h3 className="rating-title">How did we do?</h3>
      <p className="rating-description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="numbers-container">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            className={` default-state ${number >= value && "submitted"}`}
            key={value}
            onClick={() => setNumber(value)}
          >
            {value}
          </button>
        ))}
      </div>
      <button onClick={handleRating} className="submit-btn">
        Submit
      </button>
    </div>
  );
};

export default Rating;
