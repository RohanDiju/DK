import React from 'react'
import image from '../../Assets/banner2.jpg'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <img className='image' src={image} alt='logo' />

            <div className="fade"></div>

            <div className='content'>
              <h1>Rush</h1>
              <h1>Unmatched</h1>
            </div>

            <p id='desc'>Anything that gets your blood racing is probably worth doing.</p>

    </div>

    
  )
}

export default Banner