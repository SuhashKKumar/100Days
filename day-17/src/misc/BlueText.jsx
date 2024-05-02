import "../styles/BlueText.css";
const BlueText = (prop) => {
  const { text, secondary = false } = prop;

  return <p className={`${secondary ? "white-text" : "blue-text"}`}>{text}</p>;
};

export default BlueText;
