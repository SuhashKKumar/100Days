import { useState } from "react";
import "../styles/HeroCarousel.css";

const HeroCarousel = () => {
  const images = ["image1", "image2", "image3", "image4", "image5"];
  const [counter, setCounter] = useState(0);
  const increaseImage = () => {
    if (counter === images.length - 1) setCounter(0);
    else {
      setCounter((count) => count + 1);
    }
  };
  const decreaseImage = () => {
    if (counter <= 0) setCounter(images.length - 1);
    else setCounter((count) => count - 1);
  };
  return (
    <div className="hero-carousel-container">
      <button onClick={decreaseImage}>-</button>
      <div>
        <h1>{images[counter]}</h1>
        <img src={images[counter]} alt={images[counter]} />
      </div>
      <button onClick={increaseImage}>+</button>
    </div>
  );
};

export default HeroCarousel;
