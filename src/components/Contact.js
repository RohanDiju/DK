import React from 'react';
import './Contact.css';
import qr from "../Assets/qr.jpg";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        Have questions about our dance classes? We'd love to hear from you! 
        Scan the QR code below to connect with us on WhatsApp.
      </p>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <h3>Visit Our Studio</h3>
            <p>123 Dance Avenue</p>
            <p>Cityville, ST 12345</p>
          </div>

          <div className="info-card">
            <h3>Contact Information</h3>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@danceschool.com</p>
          </div>

          <div className="info-card">
            <h3>Studio Hours</h3>
            <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
            <p>Saturday: 9:00 AM - 5:00 PM</p>
            <p>Sunday: 10:00 AM - 3:00 PM</p>
          </div>
        </div>

        <div className="whatsapp-container">
          <h2>Connect With Us on WhatsApp</h2>
          <p>Scan the QR code below to start a conversation:</p>
          <div className="qr-code-container">
            {/* You would need to replace this with your actual WhatsApp QR code image */}
            <img 
              src = {qr}
              alt="WhatsApp QR Code" 
              className="whatsapp-qr-code" 
            />
          </div>
          <p className="qr-instructions">
            Or message us directly at <strong>(555) 123-4567</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;