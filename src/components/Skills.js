import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-header">
        <h2>My skills</h2>
      </div>
      <div className="skills-description">
        <p>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.
        </p>
      </div>
      <div className="skills-content">
        <div className="skill-item">
          <div className="skill-header">
            <h3>WORDPRESS</h3>
            <span>85%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-header">
            <h3>HTML & CSS</h3>
            <span>90%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-header">
            <h3>JQUERY</h3>
            <span>60%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '60%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-header">
            <h3>SKETCH</h3>
            <span>70%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
