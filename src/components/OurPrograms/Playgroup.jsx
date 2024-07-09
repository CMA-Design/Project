import React from 'react';
import './pygroup.css';

const Playgroup = () => {
  return (
    <div className="playgroup-container">
      <div className="playgroup-header">
        <h1 className="playgroup-title">PLAYGROUP</h1>
        <p className="playgroup-age">FOR AGES: 1.5 - 2.5</p>
      </div>
      <div className="playgroup-content">
        <div className="playgroup-section">
          <div className="playgroup-icon">
            <img src="https://i.imgur.com/0m25f8e.png" alt="Motor Skills Icon" />
          </div>
          <p className="playgroup-section-title">Motor Skills</p>
        </div>
        <div className="playgroup-section">
          <div className="playgroup-icon">
            <img src="https://i.imgur.com/C2sT5qA.png" alt="Cognitive Growth Icon" />
          </div>
          <p className="playgroup-section-title">Cognitive Growth</p>
        </div>
        <div className="playgroup-section">
          <div className="playgroup-icon">
            <img src="https://i.imgur.com/B7p70mG.png" alt="Grip Enhancement Icon" />
          </div>
          <p className="playgroup-section-title">Grip Enhancement</p>
        </div>
      </div>
      <div className="playgroup-description">
        <p className="playgroup-description-text">
          In our Playgroup program, we focus on fostering early development
          through engaging activities designed to promote fine motor skills,
          cognitive growth, and communication abilities
        </p>
        <ul className="playgroup-description-list">
          <li className="playgroup-description-item">
            <span className="playgroup-description-bullet">•</span>
            <span className="playgroup-description-text">
              Fine motor skill development: Through sensory play using a
              variety of textures, puzzles, and manipulatives, children enhance
              their dexterity and coordination.
            </span>
          </li>
          <li className="playgroup-description-item">
            <span className="playgroup-description-bullet">•</span>
            <span className="playgroup-description-text">
              Cognitive skills enrichment: Activities such as storytelling,
              music, and movement encourage curiosity and lay the foundation
              for early communication skills.
            </span>
          </li>
          <li className="playgroup-description-item">
            <span className="playgroup-description-bullet">•</span>
            <span className="playgroup-description-text">
              Pincer grip enhancement: Engaging in play with toys and
              exploration of sensory materials helps strengthen hand muscles
              crucial for future writing and tool use.
            </span>
          </li>
        </ul>
      </div>
      <div className="playgroup-image">
        <img src="https://i.imgur.com/z9oV8gD.png" alt="Children Playing" />
      </div>
      <div className="playgroup-buttons">
        <button className="playgroup-button">
          <span className="playgroup-button-icon">←</span>
          BACK TO SITE
        </button>
        <button className="playgroup-button">
          PRE-NURSERY
          <span className="playgroup-button-icon">→</span>
        </button>
      </div>
    </div>
  );
};

export default Playgroup;