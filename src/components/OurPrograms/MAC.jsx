import React from 'react';
import './MAC.css';

const MAC = () => {
  return (
    <div className="mac-container">
      <div className="mac-header">
        <h1 className="mac-title">MIDBRAIN ACTIVATION CLASSES</h1>
        <h2 className="mac-subtitle">FOR AGES: 7 - 14</h2>
      </div>
      <div className="mac-content">
        <div className="mac-section">
          <div className="mac-icon">
            <img src="https://cdn.pixabay.com/photo/2017/01/26/19/49/brain-1844518_960_720.png" alt="Brain icon" />
          </div>
          <h3 className="mac-section-title">Cognitive Growth</h3>
        </div>
        <div className="mac-section">
          <div className="mac-icon">
            <img src="https://cdn.pixabay.com/photo/2013/07/13/12/22/books-146766_960_720.png" alt="Books icon" />
          </div>
          <h3 className="mac-section-title">Holistic Growth</h3>
        </div>
        <div className="mac-section">
          <div className="mac-icon">
            <img src="https://cdn.pixabay.com/photo/2016/04/11/22/31/pill-1321796_960_720.png" alt="Pill icon" />
          </div>
          <h3 className="mac-section-title">Sensory Development</h3>
        </div>
      </div>
      <div className="mac-description">
        <p>In our Playgroup program, we focus on fostering early development through engaging activities designed to promote fine motor skills, cognitive growth, and communication abilities.</p>
        <ul>
          <li>
            <span className="mac-bullet"></span>
            <p>Cognitive Development: Unlock cognitive capacity through stimulating activities that engage both brain hemispheres.</p>
          </li>
          <li>
            <span className="mac-bullet"></span>
            <p>Holistic Growth: Enhance memory, concentration, and learning abilities, nurturing holistic development.</p>
          </li>
          <li>
            <span className="mac-bullet"></span>
            <p>Sensory Integration Improvement: Improve sensory integration and coordination for smoother transitions and faster response times.</p>
          </li>
        </ul>
      </div>
      <div className="mac-image">
        <img src="https://cdn.pixabay.com/photo/2014/03/26/10/01/children-299540_960_720.jpg" alt="Children playing" />
      </div>
      <div className="mac-buttons">
        <button className="mac-button mac-button-left">← GO BACK</button>
        <button className="mac-button mac-button-right">BACK TO SITE →</button>
      </div>
    </div>
  );
};

export default MAC;