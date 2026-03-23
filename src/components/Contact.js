import React from 'react';
import './Contact.css';
import qr from "../Assets/DK QR.jpg";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        Have questions about our dance classes? We'd love to hear from you! 
        Find our studio locations below or scan the QR code to connect with us on WhatsApp.
        <br/><br/>
        🚌 <strong>Transportation available</strong> from Farwaniya · Khaitan · Riggae
      </p>

      {/* Locations Section */}
      <div className="locations-section">
        <h2>Our Studios</h2>
        <div className="locations-grid">
          {/* Abbasiya Studio Card */}
          <div className="location-card">
            <h3>Mangaf Studio</h3>
            <p className="address">
              Main Branch · Kuwait
            </p>
            <a 
              href="https://maps.app.goo.gl/Zd9wzbLxKNeicMLq6?g_st=aw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="map-button"
            >
              View on Map
            </a>
          </div>

          {/* Mangaf Studio Card (Updated with coordinates) */}
          <div className="location-card">
            <h3>Abbassiya Studio</h3>
            <p className="address">
              Kuwait City Area
            </p>
            <a 
              href="https://maps.app.goo.gl/RyBjiEY1N6XfjoPu8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="map-button"
            >
              View on Map
            </a>
          </div>
          
          {/* Salmiya Studio Card (New) */}
          <div className="location-card">
            <h3>Salmiya Studio</h3>
            <p className="address">
              Kuwait City Area
            </p>
            <a 
              href="https://maps.app.goo.gl/HtjDW2VhDiuFopE59?g_st=iwb" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="map-button"
            >
              View on Map
            </a>
          </div>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <h3>Contact Information</h3>
            <p>Phone: +96569960662</p>
            <p>Phone: +96560979494</p>
            <p>Email: info@danceschool.com</p>
          </div>

          <div className="info-card">
            <h3>Studio Hours</h3>
            <h4>Mangaf</h4>
            <p>Monday and Saturday: 5:00 PM - 8:00 PM</p>
            <h4>Salmiya</h4>
            <p>Wednesday and Friday: 5:00 PM - 8:00 PM</p>
            <h4>Abbasiya</h4>
            <p>Tuesday and Sunday: 5:00 PM - 8:00 PM</p>
          </div>
        </div>

        <div className="whatsapp-container">
          <h2>Connect With Us on WhatsApp</h2>
          <p>Scan the QR code below to start a conversation:</p>
          <div className="qr-code-container">
            <img 
              src={qr}
              alt="WhatsApp QR Code" 
              className="whatsapp-qr-code" 
            />
          </div>
          <p className="qr-instructions">
            Or message us directly at <strong>+96569960662</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;