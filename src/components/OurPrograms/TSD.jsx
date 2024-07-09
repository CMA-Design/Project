import React from 'react';

const TSD = () => {
  return (
    <div className="tsd-container">
      <div className="tsd-header">
        <div className="tsd-title">
          <h1>TRINITY SPEECH AND DRAMA</h1>
          <h2>FOR AGES: 4 - 16</h2>
        </div>
        <div className="tsd-info">
          <p>In our Playgroup program, we focus on fostering early development through engaging activities designed to promote fine motor skills, cognitive growth, and communication abilities</p>
          <ul>
            <li>
              <span className="tsd-icon"></span>
              <h3>Public Speaking Skills</h3>
              <p>Develop public speaking skills and stage presence under experienced guidance, enhancing communication abilities.</p>
            </li>
            <li>
              <span className="tsd-icon"></span>
              <h3>Creative Expression</h3>
              <p>Explore creative expression through drama, storytelling, and performance, fostering artistic growth.</p>
            </li>
            <li>
              <span className="tsd-icon"></span>
              <h3>Exam Preparation</h3>
              <p>Prepare for Trinity Speech and Drama exams with confidence and enjoyment, ensuring a positive experience.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="tsd-skills">
        <div className="tsd-skill">
          <img src="speaking.svg" alt="Speaking Skills" />
          <h3>Speaking Skills</h3>
        </div>
        <div className="tsd-skill">
          <img src="creative.svg" alt="Creative Thinking" />
          <h3>Creative Thinking</h3>
        </div>
        <div className="tsd-skill">
          <img src="exam.svg" alt="Exam Readiness" />
          <h3>Exam Readiness</h3>
        </div>
      </div>
      <div className="tsd-gallery">
        <img src="gallery-image1.jpg" alt="Gallery Image 1" />
        <img src="gallery-image2.jpg" alt="Gallery Image 2" />
        <img src="gallery-image3.jpg" alt="Gallery Image 3" />
        <img src="gallery-image4.jpg" alt="Gallery Image 4" />
      </div>
      <div className="tsd-footer">
        <div className="tsd-button">
          <a href="#">← GRAMMAR AND CREATIVE WRITING</a>
        </div>
        <div className="tsd-button">
          <a href="#">MIDBRAIN ACTIVATION CLASSES →</a>
        </div>
      </div>
    </div>
  );
};

export default TSD;