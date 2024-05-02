const PrimaryBtnOnlyIcon = (prop) => {
  const { icon } = prop;
  return (
    <button className="btn-icon-primary">
      <img src={icon} alt="icon" />
    </button>
  );
};

export default PrimaryBtnOnlyIcon;
