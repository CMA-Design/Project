import React from 'react';
import './Daycare.css';

const Daycare = () => {
  return (
    <div className="daycare-container">
      <div className="daycare-header">
        <div className="daycare-title">DAYCARE</div>
        <div className="daycare-age">FOR AGES: 3.5 - 6</div>
      </div>
      <div className="daycare-content">
        <div className="daycare-left">
          <div className="daycare-icon">
            <img src="https://i.imgur.com/6e1C252.png" alt="Cognitive Growth" />
          </div>
          <div className="daycare-text">Cognitive Growth</div>
        </div>
        <div className="daycare-left">
          <div className="daycare-icon">
            <img src="https://i.imgur.com/z034w2w.png" alt="Motor Skills" />
          </div>
          <div className="daycare-text">Motor Skills</div>
        </div>
        <div className="daycare-left">
          <div className="daycare-icon">
            <img src="https://i.imgur.com/w6Kz0qM.png" alt="Grip Enhancement" />
          </div>
          <div className="daycare-text">Grip Enhancement</div>
        </div>
        <div className="daycare-right">
          <div className="daycare-text">At Cheerful Mind Academy, we offer comprehensive daycare services designed to provide a safe, nurturing, and stimulating environment for children outside of regular school hours. Our daycare program focuses on meeting the unique needs of each child while fostering a sense of security, engagement, and well-being.</div>
          <div className="daycare-feature">
            <div className="daycare-feature-icon">
              <img src="https://i.imgur.com/77J001z.png" alt="Safe Environment" />
            </div>
            <div className="daycare-feature-text">Safe Environment: Secure nurturing spaces supervised by trained staff.</div>
          </div>
          <div className="daycare-feature">
            <div className="daycare-feature-icon">
              <img src="https://i.imgur.com/77J001z.png" alt="Engaging Activities" />
            </div>
            <div className="daycare-feature-text">Engaging Activities: Age-appropriate play, arts, music and physical activity.</div>
          </div>
          <div className="daycare-feature">
            <div className="daycare-feature-icon">
              <img src="https://i.imgur.com/77J001z.png" alt="Flexible Options" />
            </div>
            <div className="daycare-feature-text">Flexible Options: Full-day, part-time, and drop-in scheduling available.</div>
          </div>
          <div className="daycare-feature">
            <div className="daycare-feature-icon">
              <img src="https://i.imgur.com/77J001z.png" alt="Qualified Team" />
            </div>
            <div className="daycare-feature-text">Qualified Team: Experienced professionals ensuring a supportive atmosphere.</div>
          </div>
          <div className="daycare-feature">
            <div className="daycare-feature-icon">
              <img src="https://i.imgur.com/77J001z.png" alt="Parent Communication" />
            </div>
            <div className="daycare-feature-text">Parent Communication: Regular updates on activities and child progress.</div>
          </div>
        </div>
      </div>
      <div className="daycare-image">
        <img src="https://i.imgur.com/U034OOR.jpg" alt="Children playing" />
      </div>
      <div className="daycare-footer">
        <div className="daycare-footer-left">
          <div className="daycare-footer-text">← KINDERGARTEN</div>
        </div>
        <div className="daycare-footer-right">
          <div className="daycare-footer-text">JOLLY PHONICS AND VOCABULARY →</div>
        </div>
      </div>
    </div>
  );
};

export default Daycare;