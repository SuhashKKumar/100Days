import '../styles/GreyParagraph.css'
const GreyParagraph = (prop) => {
    const {text, secondary=false} = prop
    
  return (
    <p className={`${secondary? 'white-paragraph' :'grey-paragraph'}`} >{text}</p>
  )
}

export default GreyParagraph