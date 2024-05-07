import "../styles/Button.css";
const Button = (prop) => {
  const { icon, text, color } = prop;
  return (
    <button className="btn-component" >
      <div className="default-btn">
        <span>{text}</span>
        {icon}
      </div>
      <div className="hover-btn">
        <span>{text}</span>
        {icon}
      </div>
    </button>
  );
};

export default Button;
