import React from "react";
import "./PreNursery.css";

const PreNursery = () => {
  return (
    <div className="pre-nursery-container">
      <div className="pre-nursery-left">
        <div className="pre-nursary-header">
          <h1>PRE-NURSERY</h1>
          <p>FOR AGES: 2.5 - 3</p>
        </div>
        <div className="pre-nursery-skills-container">
          <div className="pre-nursery-skill">
            <img
              src="https://i.ibb.co/nQ594Gq/brain.png"
              alt="Cognitive Growth"
            />
            <p>Cognitive Growth</p>
          </div>
          <div className="pre-nursery-skill">
            <img
              src="https://i.ibb.co/XSk6h0H/motor-skills.png"
              alt="Motor Skills"
            />
            <p>Motor Skills</p>
          </div>
          <div className="pre-nursery-skill">
            <img
              src="https://i.ibb.co/0Q94pYk/language-development.png"
              alt="Language Development"
            />
            <p>Language Development</p>
          </div>
        </div>
        <button className="playgroup-button">
          <span className="playgroup-icon">←</span> PLAYGROUP
        </button>
      </div>
      <div className="pre-nursery-right">
        <div className="pre-nursery-right-content">
          <p>
            Our Pre-Nursery program is structured to provide a stimulating
            environment where children's cognitive abilities, fine motor skills,
            and language acquisition are nurtured and developed.
          </p>
          <div className="pre-nursery-right-skills">
            <div className="pre-nursery-right-skill">
              <div className="pre-nursery-right-skill-icon"></div>
              <p>
                <strong>Cognitive enrichment:</strong> Hands-on
                experiences with Montessori materials challenge and refine
                problem-solving and critical thinking skills.
              </p>
            </div>
            <div className="pre-nursery-right-skill">
              <div className="pre-nursery-right-skill-icon"></div>
              <p>
                <strong>Fine motor skill mastery:</strong> Activities like
                buttoning, lacing, and construction play further develop
                pincer grips and hand-eye coordination.
              </p>
            </div>
            <div className="pre-nursery-right-skill">
              <div className="pre-nursery-right-skill-icon"></div>
              <p>
                <strong>Language development:</strong> Through
                storytelling, picture talk, rhymes, and interactive games,
                children expand their vocabulary and enhance expressive skills.
              </p>
            </div>
          </div>
        </div>
        <div className="pre-nursery-right-image">
          <img
            src="https://i.ibb.co/b5r47Vq/kids-playing.png"
            alt="Kids Playing"
          />
        </div>
        <button className="nursery-button">
          NURSERY <span className="nursery-icon">→</span>
        </button>
      </div>
    </div>
  );
};

export default PreNursery;
