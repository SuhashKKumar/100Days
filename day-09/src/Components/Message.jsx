import feedbackImage from "../assets/illustration-thank-you.svg";

const Message = (prop) => {
  const { rating } = prop;
  return (
    <div className="message-container">
      <img
        src={feedbackImage}
        alt="feedback-image"
        className="feedback-image"
      />
      <p className="rating-display">You selected {rating} out of 5</p>
      <h3 className="rating-title">Thank you!</h3>
      <p className="rating-description">
        We appreciate you taking the time to give a ratingl If you ever need
        more support, don&#39;t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Message;
