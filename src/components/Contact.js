import React from 'react';
import '../styles/Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Get in touch</h2>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <span className="icon">&#128222;</span>
            <div>
              <h3>Phone</h3>
              <p>+44 1632 960428</p>
            </div>
          </div>
          <div className="info-item">
            <span className="icon">&#128231;</span>
            <div>
              <h3>Email address</h3>
              <p>hello@bako.com</p>
            </div>
          </div>
          <div className="info-item">
            <span className="icon">&#127968;</span>
            <div>
              <h3>Location</h3>
              <p>West Palm Beach, 4669 Travis Street</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Email address" required />
            </div>
            <div className="form-group2">
            <input type="text" placeholder="Subject" required />
            </div>
            <textarea placeholder="Message" required></textarea>
            <button type="submit" className="btn send-message">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
