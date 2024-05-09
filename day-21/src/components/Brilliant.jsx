import DescriptionText from "../misc/DescriptionText";
import SecondaryHeadline from "../misc/SecondaryHeadline";
const Brilliant = () => {
    const brilliantImages =[1,2,3]
  const description =
    "We back post-revenue software businesses led by obsessed entrepreneurs that create value by solving real-world business problems. The Nordics is our playground.";
  return (
    <div className="padding-container my-5 common-container">
      <div className="container-fluid py-5">
        <div className="row ">
          <div className="col-12 col-lg-6">
            <SecondaryHeadline text="For the b2bbrilliant" />
          </div>
          <div className="col-12 col-lg-6">
            <DescriptionText text={description} />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row align-items-start" >
        {
            brilliantImages.map((brilliantImage)=><img key={brilliantImage} className="col-12 col-lg-4" src={`assets/images/brilliant-${brilliantImage}.jpg`} />)
        }
        
        </div>
      </div>
    </div>
  );
};

export default Brilliant;
