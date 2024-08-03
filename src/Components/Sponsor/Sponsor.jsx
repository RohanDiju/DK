import React from 'react'
import image from '../../Assets/banner3.png'
import './Sponsor.css'

function Sponsor() {
  return (
    <div className='sponsor'>
        <img className='sponsor_image' src={image} alt='banner3'/>

        <div className="fade_rev"></div>
        <div className="sponsor_fade"></div>
        <h1 className='sponsor_text'>Sponsor Us</h1>
    </div>
  )
}

export default Sponsor