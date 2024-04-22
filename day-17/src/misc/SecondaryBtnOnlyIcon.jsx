const SecondaryBtnOnlyIcon = (prop) => {
  const { icon } = prop;
  return (
    <button className="btn-icon-secondary">
      <img src={icon} alt="icon" />
    </button>
  );
};

export default SecondaryBtnOnlyIcon;
