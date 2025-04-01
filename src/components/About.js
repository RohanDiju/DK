import React from "react";
import "./About.css";
import logo from "../Assets/logo.png";
import rajesh from "../Assets/rajesh.png";
import shilpa from "../Assets/shilpa.png";
import bhargav from "../Assets/bhargav.JPG";

const About = () => {
  return (
    <div className="about-container">
      {/* Story Section */}
      <section className="story-section">
        <div className="story-content">
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              What began as a small collective of passionate dancers has evolved
              into a thriving community of creators. With every step, we
              celebrate the beauty of movement, the power of collaboration, and
              the magic of storytelling through dance. Join us on this exciting
              journey as we continue to inspire and be inspired.
            </p>
          </div>
          <div className="story-image">
            <img src={logo} alt="Our journey story" />
          </div>
        </div>
      </section>

      {/* Choreographers Section */}
      <section className="choreographers-section">
        <h2>Meet Our Choreographers</h2>
        <div className="choreographers-vertical">
          {/* Choreographer 1 - Rajesh Cochin */}
          <div className="choreographer-card">
            <img
              src={rajesh}
              alt="Rajesh Cochin"
              className="choreographer-image"
            />
            <div className="choreographer-details">
              <h4>Rajesh Cochin</h4>
              <p>
                One of the most noted choreographers in Kuwait with 43 years of experience
                in creating and teaching original dances for stage performances, competitions,
                and events. His expertise spans across Acrobatics, Cinematic, Bollywood and
                Contemporary styles.
              </p>
              <ul className="achievements">
                <li>Received two awards for Best Choreography at National level for programs "WOOGI - WOOGI" & "DHOOM MACHALE"</li>
                <li>Founded DK Dance World in Kuwait teaching students from age 6 to adults</li>
                <li>Spearheaded numerous artistic projects promoting modern dance in Kuwait</li>
              </ul>
            </div>
          </div>

          {/* Choreographer 2 - Shilpa C Rajesh */}
          <div className="choreographer-card">
            <img
              src={shilpa}
              alt="Shilpa C Rajesh"
              className="choreographer-image"
            />
            <div className="choreographer-details">
              <h4>Shilpa C Rajesh</h4>
              <p>
                A highly accomplished Bharatanatyam dancer and educator with
                profound knowledge of classical dance forms. Currently teaching at the Indian
                Community School in Kuwait while serving as an assistant choreographer at
                DK Dance World.
              </p>
              <ul className="achievements">
                <li>Master of Arts in Bharatanatyam from St. Theresa's College, Ernakulam</li>
                <li>Bachelor of Arts in Bharatanatyam from RLV College of Music and Fine Arts</li>
                <li>Owner of Dekshina Dance Studio in Vypin, Kerala</li>
              </ul>
            </div>
          </div>

          {/* Choreographer 3 - Bhargav Chandran */}
          <div className="choreographer-card">
            <img
              src={bhargav}
              alt="Bhargav Chandran"
              className="choreographer-image"
            />
            <div className="choreographer-details">
              <h4>Bhargav Chandran</h4>
              <p>
                Assistant Choreographer and Professional Dancer with extensive experience since 2004.
                His choreography blends innovation and tradition, bringing together classical training
                and contemporary styles to create captivating performances.
              </p>
              <ul className="achievements">
                <li>Worked on Indian films including Madhagaja, Vikrant Rona, Shiva Vedha, and Kabzaa</li>
                <li>Trained in multiple dance forms: Bharatanatyam, Kathakali, Kuchipudi, Kerala Nadanam, and Contemporary</li>
                <li>Performed in drama alongside renowned artist Mr. Madurai R. Muralidaran</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <h2>Our Achievements</h2>
        <div className="achievements-list">
          <div className="achievement-card">
            <img
              src="/api/placeholder/400/300"
              alt="National Dance Championship"
            />
            <h3>National Dance Championship 2023</h3>
            <p>
              First place in the nation, showcasing the brilliance of our
              choreography and teamwork.
            </p>
          </div>
          <div className="achievement-card">
            <img
              src="/api/placeholder/400/300"
              alt="Community Impact Program"
            />
            <h3>Community Impact Program</h3>
            <p>
              Touched lives through workshops, reaching over 500 aspiring
              dancers nationwide.
            </p>
          </div>
          <div className="achievement-card">
            <img
              src="/api/placeholder/400/300"
              alt="Cultural Excellence Award"
            />
            <h3>Cultural Excellence Award</h3>
            <p>
              Recognized as pioneers of creative choreography in the performing
              arts community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;