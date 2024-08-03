import React from 'react'
import cet from "../../Assets/cet.JPG"
import "./College.css"

function College() {
  return (
    <div className='college'>
        <img className="cet" src={cet} alt='cet'/>
        <div className="fade_top"></div>
        <div className="fade_bottom"></div>
        <div className="fade_left"></div>
        <div className="college_text">
          <h1>CET</h1>
          <p id='desc2'>College of Engineering Trivandrum (CET) is one of the oldest, most reputed and also top ranked engineering college of the state of Kerala. Since its inception in 1939, the college has grown dynamically, producing some of the most brilliant minds of the country. The college is renowned for its infrastructure and technical prowess which form the perfect environment for the optimal growth of students.</p>
        </div>

    </div>
  )
}

export default College