import { useState } from "react";

const PrimaryBtnWithIcon = (prop) => {
  const [hoverEffect, setHoverEffect] = useState(false);
  const { text, icon, hoverIcon } = prop;
  return (
    <button
      onMouseEnter={() => {
        setHoverEffect(true);
      }}
      onMouseLeave={() => {
        setHoverEffect(false);
      }}
      className={`${
        hoverEffect ? "btn-icon-text-primary-hover" : "btn-icon-text-primary"
      }`}
    >
      <img src={ hoverEffect ? hoverIcon : icon} alt={text} />
      <span>{text}</span>
    </button>
  );
};

export default PrimaryBtnWithIcon;
