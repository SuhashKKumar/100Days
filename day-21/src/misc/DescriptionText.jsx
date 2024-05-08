import '../styles/DescriptionText.css'
const DescriptionText = (prop) => {
    const {text}= prop
  return (
    <p className="description text-start " >{text}</p>
  )
}

export default DescriptionText