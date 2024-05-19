import { ClientsData } from "../lib/ClientsData";
import Button from "../misc/Button";
import "../styles/ClientsCardCarousel.css";
const ClientsCardCarousel = () => {
  return (
    <div
      id="carouselExampleRide"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {ClientsData.map(
          ({ id, description, brand, status, logo, designation }) => {
            const imgStyles = {
              backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(25, 24, 25, 0.80)),
              url(assets/images/carousel-${id}.jpg)`,
            };
            return (
              <div
                key={id}
                className={`p-4 bg-light carousel-item ${id === 1 && "active"}`}
              >
                <div className="row mb-4">
                  <div className="d-flex align-items-start justify-content-between ">
                    <h3 className="mb-0 client-brand ">{brand}</h3>
                    <p className="mb-0 client-status ">{status}</p>
                  </div>
                </div>
                <div
                  className="d-block w-100 carousel-img "
                  style={imgStyles}
                ></div>
                <div className="carousel-caption d-none d-md-block text-start ">
                  <h5>{designation}</h5>
                </div>
                <div className="mt-5">
                  <p className=" text-start client-description" >{description}.</p>
                </div>
                <div className="row mt-5">
                  <div className="d-flex align-items-center justify-content-between ">
                    <Button comp="secondary" text="Visit now" />
                    <img className="client-brand--logo" src={logo} height={60} />
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ClientsCardCarousel;
