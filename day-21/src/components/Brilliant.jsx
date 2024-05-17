import DescriptionText from "../misc/DescriptionText";
import SecondaryHeadline from "../misc/SecondaryHeadline";
import '../styles/Brilliant.css'
const Brilliant = () => {
    const brilliantImages =[1,2,3]
  const description =
    "We back post-revenue software businesses led by obsessed entrepreneurs that create value by solving real-world business problems. The Nordics is our playground.";
  return (
    <div className="padding-container my-5 common-container">
      <div className="container-fluid py-5">
        <div className="row ">
          <div className="col-12 col-xl-6 mb-lg-4 order-0">
            <SecondaryHeadline text="For the b2bbrilliant" />
          </div>
          <div className="col-12 col-xl-6 order-1">
            <DescriptionText text={description} />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row align-items-start brilliant-images-container" >
        {
            brilliantImages.map((brilliantImage)=><img className="col-xl-4 col-12 brilliant-image" key={brilliantImage} className="col-12 col-lg-4" src={`assets/images/brilliant-${brilliantImage}.jpg`} />)
        }
        
        </div>
      </div>
    </div>
  );
};

export default Brilliant;
