import HeroDropdown from "../misc/HeroDropdown";
import "../styles/SaleRentForm.css";

const SaleRentForm = () => {
  return (
    <div className="form-container">
      <div className="form-btns">
        <button className="form-btn">For Sale</button>
        <button className="form-btn">For Rent</button>
      </div>
      <hr/>
      <div className="inputs-container" >
      <input type="text" placeholder="new York, San Francisco, etc"  />
      <HeroDropdown/>
      </div>
    </div>
  );
};

export default SaleRentForm;
