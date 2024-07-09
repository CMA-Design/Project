import React from 'react';
import './JPV.css';

const JPV = () => {
  return (
    <div className="jpv-container">
      <div className="jpv-header">
        <div className="jpv-title">
          <h2>JOLLY PHONICS AND VOCABULARY</h2>
          <p>FOR AGES: 3.5 - 6</p>
        </div>
        <div className="jpv-description">
          <p>In our Playgroup program, we focus on fostering early development through engaging activities designed to promote fine motor skills, cognitive growth, and communication abilities</p>
          <ul>
            <li>
              <div className="jpv-circle" />
              <span>Engaging Learning Experience: Learn to read and write through playful songs, actions, and captivating stories that make learning enjoyable.</span>
            </li>
            <li>
              <div className="jpv-circle" />
              <span>Strong Phonemic Awareness: Develop a strong foundation for lifelong literacy success by building phonemic awareness.</span>
            </li>
            <li>
              <div className="jpv-circle" />
              <span>Tailored Workshops: Fun workshops designed for all ages, from pre-readers to early readers, creating a supportive learning environment.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="jpv-body">
        <div className="jpv-column">
          <div className="jpv-item">
            <img src="/path/to/engaging-classes-icon.svg" alt="Engaging Classes" />
            <h3>Engaging Classes</h3>
          </div>
          <div className="jpv-item">
            <img src="/path/to/language-development-icon.svg" alt="Language Development" />
            <h3>Language Development</h3>
          </div>
          <div className="jpv-item">
            <img src="/path/to/workshop-learning-icon.svg" alt="Workshop Learning" />
            <h3>Workshop Learning</h3>
          </div>
          <div className="jpv-button">
            <a href="/path/to/daycare">← DAYCARE</a>
          </div>
        </div>
        <div className="jpv-column">
          <img src="/path/to/jpv-image.jpg" alt="Children Learning" />
        </div>
        <div className="jpv-column">
          <div className="jpv-button">
            <a href="/path/to/grammar-and-creative-writing">GRAMMAR AND CREATIVE WRITING →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JPV;