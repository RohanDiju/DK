import React from 'react'
import "./Navbar.css"
import logo from "../../Assets/logo.png"

function Navbar() {
  return (
    <div>
      <div className='header'>
          <img className="logo" src={logo} alt = 'logo'/>
          <div className='menu'>
            <h5 className='home'>HOME</h5>
            <h5 className='sponsors'>SPONSORS</h5>
            <h5 className='team'>TEAM</h5>
            <h5 className='gallery'>GALLERY</h5>
          </div>

          
      </div>
    </div>
  )
}

export default Navbar