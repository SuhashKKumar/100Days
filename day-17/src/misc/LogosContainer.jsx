import google from '../assets/google-icon.svg';
import amazon from '../assets/amazon-icon.svg';
import logitech from '../assets/logitech-icon.svg';
import spotify from '../assets/spotify-icon.svg';
import samsung from '../assets/samsung-icon.svg';
import netflix from '../assets/netflix-icon.svg';
import '../styles/LogosContainer.css'
const LogosContainer = () => {
    const logos=[google, amazon, logitech, spotify, samsung, netflix]
  return (
    <div className='logos-container' >
    {
        logos.map((logo,index)=> <img className='brand-logo' key={index} src={logo} />)
    }
    
    </div>
  )
}

export default LogosContainer