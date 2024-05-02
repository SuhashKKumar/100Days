import quotes from "../assets/quotes-image.svg";
import user from "../assets/barbara.svg";
import activeStar from "../assets/star-icon-filled.svg";
import deActiveStar from "../assets/star-icon-outline.svg";
import "../styles/TestimonialsCard.css";
const TestimonialsCard = () => {
  return (
    <div className="testimonials-card-container">
      <img src={quotes} alt="quotes-image" />
      <p className="testimonial-paragraph">
        I highly recommend Jodi J. Appleby. She was attentive to our needs and
        worked tirelessly to find us the perfect home. We couldn&apos;t be
        happier with our new place!
      </p>
      <div className="user-contianer">
        <div className="user-details">
          <img src={user} alt="Barbara Picture" className="user-image" />
          <p className="user-name">Barbara D. Smith</p>
        </div>
        <div className="user-rating">
          <img className="rating-icon" src={activeStar} alt="star-icon-filled" />
          <img className="rating-icon" src={activeStar} alt="star-icon-filled" />
          <img className="rating-icon" src={activeStar} alt="star-icon-filled" />
          <img className="rating-icon" src={activeStar} alt="star-icon-filled" />
          <img className="rating-icon" src={deActiveStar} alt="star-icon-outline" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
