import HeroDropdown from "../misc/HeroDropdown";
import "../styles/SaleRentForm.css";
import search from "../assets/search-normal.svg";
import searchHoverIcon from "../assets/search-icon-hover.svg";
import PrimaryBtnWithIcon from "../misc/PrimaryBtnWithIcon";

const SaleRentForm = () => {
  return (
    <div className="form-container">
      <div className="form-btns">
        <button className="form-btn">For Sale</button>
        <button className="form-btn">For Rent</button>
      </div>
      <hr />
      <div className="inputs-container">
        <input type="text" placeholder="New York, San Francisco, etc" />
        <HeroDropdown
          options={["Apartment", "Villa", "Duplex"]}
          displayText="Select Property Type"
        />
        <HeroDropdown options={[1, 2, 3, 4]} displayText="Select Rooms" />
        <PrimaryBtnWithIcon
          text="Search"
          icon={search}
          hoverIcon={searchHoverIcon}
        />
      </div>
    </div>
  );
};

export default SaleRentForm;
