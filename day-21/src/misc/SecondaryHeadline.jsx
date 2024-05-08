import '../styles/SecondaryHeadline.css'
const SecondaryHeadline = (prop) => {
    const {text}=prop
  return (
    <h2 className='secondary-headline text-uppercase text-start ' >{text}</h2>
  )
}

export default SecondaryHeadline