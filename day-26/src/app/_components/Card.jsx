import React from "react";
import "./styles.css";

const Card = ({children}) => {
  return <div className="border cursor-pointer border-stone-200 p-5 shadow-lg">{children}</div>;
};

export default Card;
