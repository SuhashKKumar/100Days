import { useEffect, useState } from "react";
import image1 from "../assets/hero-interior-1.svg";
import image2 from "../assets/hero-interior-2.jpg";
import image3 from "../assets/hero-interior-3.jpg";
import image4 from "../assets/hero-interior-4.jpg";
import "../styles/HeroCarousel.css";

const HeroCarousel = () => {
  const images = [ image2, image3, image4,image1];
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(increaseImage, 5000);
    return () => clearInterval(interval);
  }, [counter]);

  const increaseImage = () => {
    if (counter === images.length - 1) setCounter(0);
    else {
      setCounter((count) => count + 1);
    }
  };
  return (
    <div className="hero-carousel-container">
      <img className="hero-carousel-img" src={images[counter]} />
    </div>
  );
};

export default HeroCarousel;
