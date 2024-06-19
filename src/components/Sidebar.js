import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Sidebar.css';
import img1 from '../images/download.jpeg';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src={img1} alt="Professional headshot of Bako Doe" className="profile-pic" />
        <h2>Bako Doe</h2>
        <p>Web Developer</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="home" className="nav-link" smooth={true} duration={500}>
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="about" className="nav-link" smooth={true} duration={500}>
              <i className="fas fa-user"></i> About
            </Link>
          </li>
          <li>
            <Link to="skills" className="nav-link" smooth={true} duration={500}>
              <i className="fas fa-file-alt"></i> Skills
            </Link>
          </li>
          <li>
            <Link to="contact" className="nav-link" smooth={true} duration={500}>
              <i className="fas fa-envelope"></i> Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="social">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-dribbble"></i>
      </div>
      <footer></footer>
    </div>
  );
}

export default Sidebar;
