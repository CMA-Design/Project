import React from 'react';
import './Kindergarten.css';

const Kindergarten = () => {
  return (
    <div className="container">
      <div className="left-container">
        <h1>KINDERGARTEN</h1>
        <p>FOR AGES: 3.5 - 6</p>
        <div className="icons">
          <div className="icon-container">
            <img src="https://www.svgrepo.com/show/301336/alphabet.svg" alt="ABC" />
            <p>Foundational Learning</p>
          </div>
          <div className="icon-container">
            <img src="https://www.svgrepo.com/show/25831/light-bulb.svg" alt="light bulb" />
            <p>Creative Thinking</p>
          </div>
          <div className="icon-container">
            <img src="https://www.svgrepo.com/show/175094/group-of-people.svg" alt="group of people" />
            <p>Social Skills</p>
          </div>
        </div>
        <button className="button">
          <span>←</span> NURSERY
        </button>
      </div>
      <div className="right-container">
        <p>Our Kindergarten program is designed to be an exciting and enriching journey where children build essential skills and prepare for a successful transition to primary education. Through a blend of structured learning and playful exploration, we focus on the holistic development of each child</p>
        <div className="point">
          <img src="https://www.svgrepo.com/show/173544/attention.svg" alt="attention" />
          <p>Foundational Learning: Our Kindergarten curriculum focuses on building strong foundations in language and literacy, numeracy, and scientific inquiry, preparing children for academic success.</p>
        </div>
        <div className="point">
          <img src="https://www.svgrepo.com/show/173544/attention.svg" alt="attention" />
          <p>Creative Expression: Through art, music, drama, and imaginative play, children explore their creativity, develop self-expression, and build confidence in their abilities.</p>
        </div>
        <div className="point">
          <img src="https://www.svgrepo.com/show/173544/attention.svg" alt="attention" />
          <p>Social-Emotional Skills: Our program emphasizes social skills, emotional intelligence, and teamwork, nurturing resilient and empathetic learners ready for future challenges.</p>
        </div>
        <button className="button">
          DAYCARE <span>→</span>
        </button>
      </div>
      <img src="https://images.unsplash.com/photo-1550128863-55988b75020c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="kids" />
      <button className="close">X</button>
    </div>
  );
};

export default Kindergarten;