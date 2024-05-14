import '../styles/AlliesCard.css'
const AlliesCard = (prop) => {
    const{img, description}=prop
  return (
    <div className="allies-card-container" >
    <img className="image-fluid allies-img" src={img} />
    <p className=" text-start mt-3 client-description" >{description}</p>
    </div>
  )
}

export default AlliesCard