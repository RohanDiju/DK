import React from 'react';
import './Classes.css';

const Classes = () => {
  const classes = [
    {
      id: 1,
      name: "Acrobatics",
      description: "Build strength, flexibility, and balance through structured acrobatic techniques. Suitable for all age groups from beginners to advanced levels.",
      image: "acrobatics.jpg"
    },
    {
      id: 2,
      name: "Cinematic",
      description: "Master the art of cinematic dance — blending storytelling, expression, and choreography for stage and screen performances.",
      image: "cinematic.jpg"
    },
    {
      id: 3,
      name: "Bollywood",
      description: "High-energy Bollywood dance blending classical Indian expressions with modern fusion styles. Perfect for performances and competitions.",
      image: "bollywood.jpg"
    },
    {
      id: 4,
      name: "Contemporary",
      description: "Explore fluid movement, improvisation, and emotional expression through contemporary dance techniques and modern choreography.",
      image: "contemporary.jpg"
    },
    {
      id: 5,
      name: "Bharatanatyam",
      description: "One of India's oldest and most expressive classical dance forms. Learn intricate footwork, mudras, and abhinaya (expression) from experienced instructors.",
      image: "bharatanatyam.jpg"
    },
    {
      id: 6,
      name: "Classical",
      description: "A comprehensive classical dance program covering traditional South Indian dance forms, rhythm, expression, and stage performance techniques for all age groups.",
      image: "classical.jpg"
    }
  ];

  return (
    <div className="classes-container">
      <div className="section-label">What We Teach</div>
      <h2 className="section-title">Our Dance Programs</h2>
      <div className="divider"></div>

      <div className="classes-grid">
        {classes.map((danceClass) => (
          <div key={danceClass.id} className="class-card">
            <div className="class-image">
              <img src={danceClass.image} alt={danceClass.name} />
            </div>
            <div className="class-info">
              <h3>{danceClass.name}</h3>
              <p>{danceClass.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;