import '../styles/BlueText.css'
const BlueText = (prop) => {
    const {text} = prop
    
  return (
    <p className='blue-text' >{text}</p>
  )
}

export default BlueText