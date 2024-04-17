// import React from 'react'
import '../styles/RezillaLogo.css'
import rezillaLogo from '../assets/rezillz-logo.svg'

const RezillaLogo = () => {
  return (
    <div className="logo-container" >
    <img src={rezillaLogo} alt='rezilla-logo' className="rezilla-logo" />
    <h3 className="logo-name" >Rezilla</h3>
    </div>
  )
}

export default RezillaLogo