import '../styles/BedsAndBath.css'

const BedsAndBath = (prop) => {
    const {icon, text}= prop
  return (
    <div className='beds-and-bath-container' >
    <img src={icon} alt={text} />
    <p className='beds-and-bath-text' >{text}</p>
    </div>
  )
}

export default BedsAndBath