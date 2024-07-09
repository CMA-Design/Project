import React from 'react';
import './GCW.css';

const GCW = () => {
  return (
    <div className="GCW">
      <div className="GCW-container">
        <div className="GCW-header">
          <div className="GCW-title">GRAMMAR AND CREATIVE WRITING</div>
          <div className="GCW-subtitle">FOR AGES: 6 AND ABOVE</div>
        </div>
        <div className="GCW-content">
          <div className="GCW-section">
            <div className="GCW-icon">
              <img src="https://www.flaticon.com/free-icons/interactive" alt="Interactive Classes" />
            </div>
            <div className="GCW-title">Interactive Classes</div>
          </div>
          <div className="GCW-section">
            <div className="GCW-icon">
              <img src="https://www.flaticon.com/free-icons/abc" alt="Language Development" />
            </div>
            <div className="GCW-title">Language Development</div>
          </div>
          <div className="GCW-section">
            <div className="GCW-icon">
              <img src="https://www.flaticon.com/free-icons/confidence" alt="Confidence Building" />
            </div>
            <div className="GCW-title">Confidence Building</div>
          </div>
        </div>
        <div className="GCW-details">
          <div className="GCW-description">In our Playgroup program, we focus on fostering early development through engaging activities designed to promote fine motor skills, cognitive growth, and communication abilities</div>
          <div className="GCW-point">Interactive Learning: Master language fundamentals through interactive and engaging activities that make learning fun.</div>
          <div className="GCW-point">Language Skills Improvement: Enhance sentence structure, punctuation, and parts of speech, building a solid foundation in language skills.</div>
          <div className="GCW-point">Confidence Building: Develop confidence in written and spoken communication, preparing students for success in school and beyond.</div>
        </div>
      </div>
      <div className="GCW-footer">
        <div className="GCW-left">
          <div className="GCW-arrow">←</div>
          <div className="GCW-title">JOLLY PHONICS AND VOCABULARY</div>
        </div>
        <div className="GCW-right">
          <div className="GCW-title">TRINITY SPEECH AND DRAMA</div>
          <div className="GCW-arrow">→</div>
        </div>
      </div>
    </div>
  );
};

export default GCW;