import React from 'react';
import '../styles/About.css';
import img1 from '../images/download.jpeg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-me">
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <div className="profile-picture">
        <img src={img1} alt="Professional headshot of Bako Doe" className="profile-picture img" />
        </div>
        <div className="intro">
          <h1>Hello,</h1>
          <p>
            I am Bako Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at wordpress.
          </p>
          <div className="details">
            <p><strong>Name:</strong> Bako Doe</p>
            <p><strong>Birthday:</strong> 14 August, 1990</p>
            <p><strong>Location:</strong> London, UK</p>
            <p><strong>Email:</strong> hello@bako.com</p>
          </div>
          <div className="buttons">
            <a href="path/to/cv.pdf" className="btn download-cv">Download CV</a>
            <a href="mailto:hello@bako.com" className="btn hire-me">Hire me</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
