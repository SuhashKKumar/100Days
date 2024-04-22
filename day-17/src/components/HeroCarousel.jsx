import { useState } from "react";
import "../styles/HeroCarousel.css";
import image1 from "../assets/hero-interior-1.svg";
import image2 from "../assets/hero-interior-2.jpg";
import image3 from "../assets/hero-interior-3.jpg";
import image4 from "../assets/hero-interior-4.jpg";
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";
import SecondaryBtnOnlyIcon from "../misc/SecondaryBtnOnlyIcon";

const HeroCarousel = () => {
  const images = [image1, image2, image3, image4];
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
      <div onClick={decreaseImage}>
        <SecondaryBtnOnlyIcon icon={leftArrow} />
      </div>
      <img
        className="hero-carousel-img"
        width={540}
        height={340}
        src={images[counter]}
      />
      <div onClick={increaseImage}>
        <SecondaryBtnOnlyIcon icon={rightArrow} />
      </div>
    </div>
  );
};

export default HeroCarousel;
