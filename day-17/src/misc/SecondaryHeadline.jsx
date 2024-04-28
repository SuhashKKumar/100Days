import "../styles/SecondaryHeadline.css";

const SecondaryHeadline = (prop) => {
  const { text } = prop;
  return <div className="secondary-headline">{text}</div>;
};

export default SecondaryHeadline;
