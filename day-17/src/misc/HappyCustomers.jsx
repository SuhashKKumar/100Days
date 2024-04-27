import image1 from "../assets/ellipse-1.svg";
import image2 from "../assets/ellipse-2.svg";
import image3 from "../assets/ellipse-3.svg";
import image4 from "../assets/ellipse-4.svg";
import image5 from "../assets/ellipse-5.svg";
import image6 from "../assets/ellipse-6.svg";
import "../styles/HappyCustomers.css";

const HappyCustomers = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  return (
    <div className="happy-customers-container" >
    <div className="happy-customers-sub-container">
    <div className="customers-images-container">
    {images.map((singleImage, index) => 
        <img className="hero-collapsed-images" key={index} src={singleImage}  alt={`Image ${index}`} />
    )}
    </div>
    <p className="happy-customers-text">72k+ Happy Customers</p>
    </div>
    </div>
  );
};

export default HappyCustomers;
