import "../styles/ServicesCard.css";
const ServicesCard = (prop) => {
  const { icon, title, description } = prop;
  return (
    <div className="services-card-contaier">
      <img className="service-icon" src={icon} alt={title} />
      <p className="service-title" >{title}</p>
      <p className="service-description" >{description}</p>
    </div>
  );
};

export default ServicesCard;
