const SecondaryBtnWithIcon = (prop) => {
  const { text, icon } = prop;
  return (
    <button className="btn-text-icon-secondary">
      <img src={ icon} alt={text} />
      <span>{text}</span>
    </button>
  );
};

export default SecondaryBtnWithIcon;
