import "../styles/Clients.css";
import ClientsCardCarousel from "./ClientsCardCarousel";
const Clients = () => {
  return (
    <div className="clients-container">
      <div className="container-fluid">
        <div className="row">
          <div className="mx-auto py-5 py-sm-0 col-12 col-xl-5 col-xxl-4 col-lg-7  ">
          <ClientsCardCarousel/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
