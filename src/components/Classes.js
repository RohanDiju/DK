import React, { useState } from 'react';
import './Classes.css';

const Classes = () => {
  const classes = [
    {
      id: 1,
      name: "Classical Ballet",
      description: "Foundation of dance that focuses on technique, grace, and precision. Learn proper posture, balance, and classical movements.",
      schedule: ["Mon & Wed: 4:00 PM - 5:30 PM", "Sat: 10:00 AM - 11:30 AM"],
      level: "Beginner to Advanced",
      instructor: "Emma Williams",
      price: "$120/month",
      image: "/api/placeholder/400/300",
      features: ["Basic positions", "Barre work", "Center practice", "Performance opportunities"]
    },
    {
      id: 2,
      name: "Contemporary Dance",
      description: "Modern dance form that combines classical ballet with elements of modern dance styles. Express yourself through fluid movements.",
      schedule: ["Tue & Thu: 5:00 PM - 6:30 PM", "Sun: 11:00 AM - 12:30 PM"],
      level: "Intermediate to Advanced",
      instructor: "John Doe",
      price: "$110/month",
      image: "/api/placeholder/400/300",
      features: ["Floor work", "Improvisation", "Choreography", "Strength training"]
    },
    {
      id: 3,
      name: "Hip Hop",
      description: "High-energy urban dance style incorporating street dance moves, footwork, and dynamic choreography.",
      schedule: ["Wed & Fri: 6:00 PM - 7:30 PM", "Sat: 2:00 PM - 3:30 PM"],
      level: "All Levels",
      instructor: "Mike Johnson",
      price: "$100/month",
      image: "/api/placeholder/400/300",
      features: ["Basic grooves", "Power moves", "Freestyle", "Battle techniques"]
    },
    {
      id: 4,
      name: "Indian Classical",
      description: "Traditional Indian dance forms including Bharatanatyam and Kathak, focusing on storytelling through dance.",
      schedule: ["Mon & Thu: 5:30 PM - 7:00 PM", "Sun: 9:00 AM - 10:30 AM"],
      level: "Beginner to Advanced",
      instructor: "Priya Sharma",
      price: "$130/month",
      image: "/api/placeholder/400/300",
      features: ["Mudras", "Facial expressions", "Rhythm work", "Classical compositions"]
    },
    {
      id: 5,
      name: "Cinematic Dance",
      description: "Energetic and rhythmic dance style combining modern dance with classical techniques.",
      schedule: ["Tue & Fri: 4:30 PM - 6:00 PM", "Sat: 12:00 PM - 1:30 PM"],
      level: "All Levels",
      instructor: "Sarah Anderson",
      price: "$110/month",
      image: "/api/placeholder/400/300",
      features: ["Isolation exercises", "Jazz walks", "Turns", "Jump combinations"]
    },
    {
      id: 6,
      name: "Kids Dance",
      description: "Fun and engaging dance classes specially designed for children to develop coordination and creativity.",
      schedule: ["Mon & Wed: 3:00 PM - 4:00 PM", "Sat: 9:00 AM - 10:00 AM"],
      level: "Ages 5-12",
      instructor: "Lisa Brown",
      price: "$90/month",
      image: "/api/placeholder/400/300",
      features: ["Basic movements", "Music appreciation", "Group activities", "Dance games"]
    }
  ];

  const [selectedClass, setSelectedClass] = useState(null);

  const openModal = (danceClass) => {
    setSelectedClass(danceClass);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedClass(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="classes-container">
      <h1>Our Dance Classes</h1>
      <p className="classes-intro">
        Discover your passion for dance through our diverse range of classes taught by experienced instructors.
      </p>

      <div className="classes-grid">
        {classes.map((danceClass) => (
          <div key={danceClass.id} className="class-card" onClick={() => openModal(danceClass)}>
            <div className="class-image">
              <img src={danceClass.image} alt={danceClass.name} />
            </div>
            <div className="class-info">
              <h3>{danceClass.name}</h3>
              <p>{danceClass.description}</p>
              <div className="class-details">
                <span>{danceClass.level}</span>
                <span>{danceClass.price}</span>
              </div>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Class Details Modal */}
      {selectedClass && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-header">
              <div className="modal-image">
                <img src={selectedClass.image} alt={selectedClass.name} />
              </div>
              <div className="modal-title">
                <h2>{selectedClass.name}</h2>
                <p className="instructor">Instructor: {selectedClass.instructor}</p>
              </div>
            </div>
            <div className="modal-body">
              <p className="description">{selectedClass.description}</p>
              
              <div className="details-grid">
                <div className="detail-item">
                  <h4>Level</h4>
                  <p>{selectedClass.level}</p>
                </div>
                <div className="detail-item">
                  <h4>Price</h4>
                  <p>{selectedClass.price}</p>
                </div>
              </div>

              <div className="schedule">
                <h4>Schedule</h4>
                <ul>
                  {selectedClass.schedule.map((time, index) => (
                    <li key={index}>{time}</li>
                  ))}
                </ul>
              </div>

              <div className="features">
                <h4>What You'll Learn</h4>
                <ul>
                  {selectedClass.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <button className="enroll-btn">Enroll Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Classes;