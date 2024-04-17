import '../styles/GreyParagraph.css'
const GreyParagraph = (prop) => {
    const {text} = prop
    
  return (
    <p className='grey-paragraph' >{text}</p>
  )
}

export default GreyParagraph