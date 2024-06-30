import React from 'react';
import { useState } from 'react';
import './HomePage.css';
import '../../fonts/Life is goofy.ttf';
import '../../fonts/OstrichSans-Heavy.otf';

function HomePage() {
  return (
    <div className="container">
      {/* <Header /> */}
      <section className="hero">
        <div className='image'>
          <img src="img1.png" alt="Image 1" className="image-top-left" />
          <img src="img2.png" alt="Image 2" className="image-top-right" />
        </div>
        <div className="banner">
          <h3>CHEERFUL MIND ACADEMY</h3>
        </div>
        <div className='image'>
          <img src="img3.png" alt="Image 3" className="image-bottom-left" />
          <img src="img4.png" alt="Image 4" className="image-bottom-right" />
        </div>
        <div className="content">
          <p>WELCOME TO CHEERFUL MIND ACADEMY</p>
          <p>A BEACON OF EARLY CHILDHOOD EDUCATION EXCELLENCE </p>
          <p>WITH A LEGACY FOR OVER 25 YEARS AND 10,000 YOUNG MINDS.</p>
          {/* <img src="Arrow.png" alt="Arrow" className="arrow" /> */}
        </div>
      </section>
      <section className="welcome">
        <div className='Border'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1347" height="1101" viewBox="0 0 1920 1101" fill="none">
            <path d="M122.437 42.3259C97.0395 44.5734 28.8182 35.6524 -2.11774 30.9109L2.83718e-05 1100.05H1922.7L1920 26.0616C1925.36 25.363 1695.19 25.4328 1660.26 31.3013C1616.59 38.6369 1461.9 48.9407 1366.77 40.6396C1290.67 33.9987 1084.91 24.7994 991.545 21.0299C967.74 21.1361 911.204 23.8992 875.497 34.1012C839.79 44.3032 797.707 49.6167 781.128 50.9983C749.566 54.2927 671.967 54.3139 614.071 28.0438C556.174 1.77365 487.519 -0.630809 460.428 1.45073C448.029 4.50325 406.778 13.3237 325.031 19.7985C160.059 25.5948 154.465 36.707 122.437 42.3259Z" fill="#FFCA32"/>
          </svg>
        </div>
        <h2>WHERE PLAY IS PURPOSEFUL AND LEARNING IS PLAYFUL</h2>
        <p>Our philosophy revolves around the idea that children learn best through play. Play is not just a way for children to pass the time, it is their way of understanding the world, experimenting with ideas, and developing crucial skills. We embrace this philosophy wholeheartedly and weave it into every aspect of our curriculum and daily activities.</p>
      </section>
      <section className="pillars">
        <div className="pillar">
          <h3>INQUIRY-BASED LEARNING</h3>
          <p>Our curriculum is built around asking questions, investigating, and making connections. Through hands-on experiences, inquiries, and projects, we encourage children to explore their interests and develop critical thinking skills.</p>
        </div>
        <div className="pillar">
          <h3>PLAY-BASED APPROACH</h3>
          <p>We believe in the power of play as a learning tool. Through imaginative play, children learn to develop social skills, and express their creativity. </p>
        </div>
        <div className="pillar">
          <h3>CULTURAL DIVERSITY</h3>
          <p>We celebrate diversity and foster a global perspective by preparing children to be global citizens. With respect for different cultures, beliefs, languages, and perspectives and backgrounds, we encourage children to be open-minded and tolerant. </p>
        </div>
        <div className="pillar">
          <h3>1:5 STUDENT TEACHER RATIO</h3>
          <p>Our small class sizes ensure that every child receives individual attention and care. We provide a supportive and stimulating environment for each child’s learning journey.</p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2023 Cheerful Mind Academy</p>
      </footer>
    </div>
  );
}

export default HomePage;