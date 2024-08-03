import React from 'react'
import image from '../../Assets/about1.jpg'
import './About.css'

function About() {
  return (
    <div className='about'>
        <img className='wallpaper' src={image} alt='about'/>
        <div className="top_fade"></div>

        <div className='text'>
            <h1>About Us</h1>
            <p id='desc1'>We are a team of students from College of Engineering Trivandrum who are fueled by passion, driven by desire and equipped with the the skill to fabricate an All Terrain Vehicle (ATV) for taking part in the national BAJA collegiate competitions.</p>
        </div>

        <div className="bottom_fade"></div>

    </div>
  )
}

export default About