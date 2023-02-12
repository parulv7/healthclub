import React from 'react'
import "./Footer.css"
import github from "../../assets/github.png"
import intra from "../../assets/instagram.png"
import linkin from "../../assets/linkedin.png"
import logo from "../../assets/logo.png"
const Footer = () => {
  return (
    <div className="Footer-container">
        <hr/>
        <div className='footer'>
        <div className='social-links'>
        <img src={github} alt=''/>
        <img src={intra} alt=''/>
        <img src={linkin} alt=''/>
    </div>
    <div className='logo-f'>
<img src={logo} alt='lpgo'/>
    </div>
    </div>
    </div>
  )
}

export default Footer