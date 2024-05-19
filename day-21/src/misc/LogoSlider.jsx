import { useEffect } from "react";
import "../styles/LogoSlider.css";

const LogoSlider = () => {
  const imageFileNames = [
    "logo-1",
    "logo-4",
    "logo-2",
    "logo-16",
    "logo-5",
    "logo-3",
    "logo-8",
    "logo-17",
    "logo-6",
    "logo-18",
    "logo-9",
    "logo-14",
    "logo-12",
    "logo-7",
    "logo-13",
    "logo-11",
    "logo-19",
    "logo-10",
    "logo-15",
    "logo-20",
  ];

  useEffect(() => {
    const scrolls = document.querySelectorAll(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
    function addAnimation() {
      scrolls.forEach((scroll) => {
        scroll.setAttribute("data-animated", true);
        const scrollerInner = scroll.querySelector(".scroller--inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  },[]);

  return (
    <div className=" my-5 mb-sm-3 scroller">
      <div className=" scroller--inner">
        {imageFileNames.map((image, index) => (
          <img
            key={index}
            src={`assets/logos/${image}.svg`}
            alt={`Image ${index + 1}`}
            className="logo-slider--item"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
