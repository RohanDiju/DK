import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import slide1 from "../Assets/slide1.jpg";
import slide2 from "../Assets/slide2.jpg";
import slide3 from "../Assets/slide3.jpg";
import slide4 from "../Assets/slide4.jpg";
import choreo1 from "../Assets/choreographer1.jpg";
import choreo2 from "../Assets/choreographer2.jpg";
import choreo3 from "../Assets/choreographer3.jpg";
// Import celebrity images

import celeb2 from "../Assets/slide2.jpg";     // to your Assets folder
import celeb3 from "../Assets/slide3.jpg"; // or use appropriate paths

const Home = () => {
  const celebrities = [
    {
      name: "Prabhu Deva",
      role: "Dancer & Actor",
      quote: "The dedication to teaching classical dance forms while embracing modern techniques is truly remarkable. This academy stands out in preserving our cultural heritage.",
      image: "prabhudeva.jpg"
    },
    {
      name: "Manju Warrier",
      role: "Actor & Classical Dancer",
      quote: "As a classical dancer myself, I'm impressed by the depth of knowledge and expertise the instructors bring. They nurture both technique and artistic expression.",
      image: celeb2
    },
    {
      name: "Kunchacko Boban",
      role: "Actor",
      quote: "The fusion of traditional and contemporary dance styles here is amazing. They're truly creating well-rounded dancers.",
      image: celeb3
    }
  ];

  return (
    <div className="home">
      {/* Sliding Image Gallery */}
      <div className="slider">
        <Swiper
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="swiper-container"
        >
          <SwiperSlide>
            <div className="slide-content">
              <img src={slide1} alt="Slide 1" className="slide-image" />
              <div className="slide-text">
                <h1>DK DANCE WORLD</h1>
                <p>Kuwait's Premier Dance Academy</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={slide2} alt="Slide 2" className="slide-image" />
              <div className="slide-text">
                <h1>43+ Years Experience</h1>
                <p>Professional dance training across three offline locations in Kuwait.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={slide3} alt="Slide 3" className="slide-image" />
              <div className="slide-text">
                <h1>Online via TutorsValley</h1>
                <p>Now available Online worldwide in collaboration with TutorsValley Music Academy.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={slide4} alt="Slide 4" className="slide-image" />
              <div className="slide-text">
                <h1>6+ Dance Styles</h1>
                <p>From Acrobatics to Bharatanatyam, for students of all ages.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Embedded YouTube Video */}
      <section className="video-section">
        <h2>Watch Us in Action</h2>
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/AjMwHijhIiM"
            title="Dance Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Choreographers Section */}
      <section className="choreographers-section">
        <div className="section-header">
          <h1>Meet Our Choreographers</h1>
          <p>
            Our expert choreographers bring years of experience in various dance
            forms, ensuring you receive world-class training.
          </p>
        </div>

        <div className="choreographers-grid">
          {/* Choreographer 1 */}
          <div className="choreographer-card">
            <div className="choreographer-image-wrapper">
              <img src={choreo1} alt="Rajesh Cochin" className="choreographer-photo" />
            </div>
            <div className="choreographer-info">
              <h3>Rajesh Cochin</h3>
              <p className="choreographer-role">Founder & Head Choreographer</p>
              <p className="choreographer-bio">
                One of Kuwait's most recognised choreographers with over 43 years of dance experience. Founder of DK Dance World, leading students aged 6 to adults in Acrobatics, Cinematic, Bollywood, and Contemporary styles.</p>
            </div>
          </div>

          {/* Choreographer 2 */}
          <div className="choreographer-card">
            <div className="choreographer-image-wrapper">
              <img src={"shilpa.png"} alt="Shilpa C Rajesh" className="choreographer-photo" />
            </div>
            <div className="choreographer-info">
              <h3>RLV Shilpa C Rajesh</h3>
              <p className="choreographer-role">Bharatanatyam & Indian Classical</p>
              <p className="choreographer-bio">
                Dedicated dance instructor with 7+ years of experience in traditional and modern Indian dance forms.
              </p>
            </div>
          </div>

          {/* Choreographer 3 */}
          <div className="choreographer-card">
            <div className="choreographer-image-wrapper">
              <img src={choreo3} alt="Bharghav Chandran" className="choreographer-photo" />
            </div>
            <div className="choreographer-info">
              <h3>Bharghav Chandran</h3>
              <p className="choreographer-role">Latin Dance Enthusiast</p>
              <p className="choreographer-bio">
                Bharghav's choreography blends innovation and tradition, bringing together classical training and contemporary styles to create captivating performances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Celebrity Testimonials Section */}
      <section className="testimonials-section">
        <h1>Celebrity Testimonials</h1>
        <div className="testimonials-grid">
          {celebrities.map((celebrity, index) => (
            <div key={index} className="celebrity-testimonial">
              <div className="testimonial-header">
                <div className="celebrity-image-container">
                  <img
                    src={celebrity.image}
                    alt={celebrity.name}
                    className="celebrity-image"
                  />
                </div>
                <div className="celebrity-info">
                  <h3 className="celebrity-name">{celebrity.name}</h3>
                  <p className="celebrity-role">{celebrity.role}</p>
                </div>
              </div>
              <blockquote className="celebrity-quote">
                "{celebrity.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;