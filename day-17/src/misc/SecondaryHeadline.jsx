import "../styles/SecondaryHeadline.css";

const SecondaryHeadline = (prop) => {
  const { text, secondary=false } = prop;
  return <div className={`${secondary? 'white-headline':'secondary-headline'}`}>{text}</div>;
};

export default SecondaryHeadline;
