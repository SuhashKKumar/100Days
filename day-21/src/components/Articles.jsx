import { useState } from "react";
import { ArticlesData } from "../lib/ArticlesData";
import Button from "../misc/Button";
import "../styles/Articles.css";

const Articles = () => {
  const initStyles = {
    backgroundImage: "none",
    backgroundPosition: "center",
    backgroundSize: "50rem",
    backgroundRepeat: "no-repeat",
  };
  const [bgStyles, setBgStyles] = useState(initStyles);
  function mouseOverHandler(id) {
    setBgStyles({
      ...bgStyles,
      backgroundImage: `url(assets/images/article-${id}.jpg)`,
    });
  }
  function mouseOutHandler() {
    setBgStyles(initStyles);
  }
  return (
    <div style={bgStyles} className="container-fluid">
      {ArticlesData.map(({ id, title, date }) => (
        <div
          key={id}
          onMouseOver={() => mouseOverHandler(id)}
          onMouseOut={mouseOutHandler}
          className=" article row py-5 border-top d-flex align-items-start justify-content-between"
        >
          <p className="col-lg-2 m-0 pt-2 article-date">{date}</p>
          <p className=" col-lg-8 text-start m-0 p-0 article-title">{title}</p>
          <div className="col-lg-2 read-more--btn ">
            <Button text="READ NOW" comp="secondary" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
