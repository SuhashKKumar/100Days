import '../styles/Hero.css'
import HeroLeftContainer from './HeroLeftContainer'
import HeroRightContainer from './HeroRightContainer'
const Hero = () => {
  return (
    <div className="hero-container" >
    <HeroLeftContainer/>
    <HeroRightContainer/>
    </div>
  )
}

export default Hero