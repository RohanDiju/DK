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
import celeb1 from "../Assets/choreographer1.jpg";  // Add these images
import celeb2 from "../Assets/slide2.jpg";     // to your Assets folder
import celeb3 from "../Assets/slide3.jpg"; // or use appropriate paths

const Home = () => {
  const celebrities = [
    {
      name: "Mohanlal",
      role: "Actor",
      quote: "The dedication to teaching classical dance forms while embracing modern techniques is truly remarkable. This academy stands out in preserving our cultural heritage.",
      image: celeb1
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
                <h1>Dance to Express</h1>
                <p>Feel the rhythm, and let your body move to the music.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={slide2} alt="Slide 2" className="slide-image" />
              <div className="slide-text">
                <h1>Learn from the Best</h1>
                <p>Professional instructors guiding every step of the way.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={slide3} alt="Slide 3" className="slide-image" />
              <div className="slide-text">
                <h1>Experience the Joy</h1>
                <p>Dance brings happiness and confidence like nothing else.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={slide4} alt="Slide 4" className="slide-image" />
              <div className="slide-text">
                <h1>Join Our Dance Family</h1>
                <p>Become part of our growing community of dancers.</p>
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
        <h1>Meet Our Choreographers</h1>
        <p>
          Our expert choreographers bring years of experience in various dance
          forms, ensuring you receive world-class training.
        </p>

        {/* Choreographer 1 */}
        <div className="choreographer-details">
          <img src={choreo1} alt="Rajesh Cochin" className="choreographer-photo" />
          <div className="choreographer-info">
            <h3>Rajesh Cochin</h3>
            <p>Specialized in Contemporary Dance</p>
            <p>
              With over 10 years of experience, Rajesh has performed in numerous international 
              dance festivals. His passion for contemporary dance has inspired countless students.
            </p>
          </div>
        </div>

        {/* Choreographer 2 */}
        <div className="choreographer-details">
          <img src={choreo2} alt="Shilpa C Rajesh" className="choreographer-photo" />
          <div className="choreographer-info">
            <h3>RLV Shilpa C Rajesh</h3>
            <p>Expert in Classical Dance</p>
            <p>
              A passionate and professional dancer with a strong academic foundation in dance, 
              she has completed both undergraduate and postgraduate degrees specializing in 
              Bharatanatyam. Combining traditional knowledge with modern artistry, she brings 
              a unique blend of expertise and creativity to her teaching.
            </p>
          </div>
        </div>

        {/* Choreographer 3 */}
        <div className="choreographer-details">
          <img src={choreo3} alt="Bharghav Chandran" className="choreographer-photo" />
          <div className="choreographer-info">
            <h3>Bharghav Chandran</h3>
            <p>Latin Dance Enthusiast</p>
            <p>
              Bharghav is known for his expertise in Salsa, Bachata, and other Latin dance forms. 
              He has trained under world-renowned instructors and brings his vibrant energy to every class.
            </p>
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