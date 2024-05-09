import Clients from '../misc/Clients'
import LogoSlider from '../misc/LogoSlider'
import SecondaryHeadline from '../misc/SecondaryHeadline'
import '../styles/Portfolio.css'
const Portfolio = () => {
  return (
    <div className="padding-container my-5 common-container">
      <div className="container-fluid py-5">
        <div className="row ">
          <div className="col-12">
            <SecondaryHeadline text="portfolio" />
          </div>
          <div className="col-12">
            <LogoSlider/>
          </div>
          <div className='col-12' >
          <Clients/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Portfolio