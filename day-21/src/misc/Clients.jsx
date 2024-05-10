import "../styles/Clients.css";
import ClientsCardCarousel from "./ClientsCardCarousel";
const Clients = () => {
  return (
    <div className="clients-container">
      <div className="container-fluid">
        <div className="row">
          <div className="mx-auto py-5 col-12 col-lg-6">
          <ClientsCardCarousel/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
