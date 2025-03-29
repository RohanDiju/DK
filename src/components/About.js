import React from "react";
import "./About.css"
import logo from "../Assets/logo.png";
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
            <img
              src={logo}
              alt="Our journey story"
            />
          </div>
        </div>
      </section>

      {/* Choreographers Section */}
      <section className="choreographers-section">
        <h2>Meet Our Choreographers</h2>
        <div className="choreographers-vertical">
          {/* Choreographer 1 */}
          <div className="choreographer-card">
            <img
              src="https://via.placeholder.com/400x500"
              alt="Rajesh Cochin"
              className="choreographer-image"
            />
            <div className="choreographer-details">
              <h4>John Doe</h4>
              <p>
                He is one of the most noted choreographers in Kuwait.
                A highly talented choreographer with extensive experience in creating and teaching original dances for stage performances, competitions and events.
              </p>
              <ul className="achievements">
                <li>Winner of the National Dance Championship 2022</li>
                <li>Featured choreographer at the International Arts Festival</li>
                <li>Directed over 50 contemporary dance performances</li>
              </ul>
            </div>
          </div>

          {/* Choreographer 2 */}
          <div className="choreographer-card">
            <img
              src="https://via.placeholder.com/400x500"
              alt="Jane Smith"
              className="choreographer-image"
            />
            <div className="choreographer-details">
              <h4>Jane Smith</h4>
              <p>
                Known for her vibrant hip-hop routines, Jane brings unmatched
                energy to every performance and has worked with top artists.
              </p>
              <ul className="achievements">
                <li>Choreographed for two international music tours</li>
                <li>Winner of the Urban Dance Festival 2023</li>
                <li>Creator of multiple viral dance videos</li>
              </ul>
            </div>
          </div>

          {/* Choreographer 3 */}
          <div className="choreographer-card">
            <img
              src="https://via.placeholder.com/400x500"
              alt="Emma Williams"
              className="choreographer-image"
            />
            <div className="choreographer-details">
              <h4>Emma Williams</h4>
              <p>
                Emma’s mastery of classical forms combined with her innovative
                spirit has made her a pioneer in the world of traditional dance.
              </p>
              <ul className="achievements">
                <li>Recipient of the Excellence in Classical Dance Award</li>
                <li>Performed at the Royal International Dance Gala</li>
                <li>Published research on traditional dance preservation</li>
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
              src="https://via.placeholder.com/400x300"
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
              src="https://via.placeholder.com/400x300"
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
              src="https://via.placeholder.com/400x300"
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
