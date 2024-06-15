import React from 'react';
import './HomePage.css'; 

function HomePage() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Cheerful Mind Academy Logo" />
        </div>
        <div className="title">
          <p
            style={{
              color: 'var(--accent-main, #E63747)',
              textAlign: 'left',
              fontFamily: 'Life is Goofy',
              fontSize: '55.296px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              letterSpacing: '-1.106px'
            }}
          >CHEERFUL MIND ACADEMY</p>
        </div>
        <nav>
          <ul>
            <li style={{ fontFamily: 'Public Sans' }}><a href="#">Home</a></li>
            <li style={{ fontFamily: 'Public Sans' }}><a href="#">Our Programs</a></li>
            <li style={{ fontFamily: 'Public Sans' }}><a href="#">After School Programs</a></li>
            <li style={{ fontFamily: 'Public Sans' }}><a href="#">Testimonials</a></li>
            <li style={{ fontFamily: 'Public Sans' }}><a href="#">Gallery</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h2>WELCOME TO CHEERFUL MIND ACADEMY</h2>
          <p>A BEACON OF EARLY CHILDHOOD EDUCATION EXCELLENCE WITH A LEGACY FOR OVER 25 YEARS AND 10,000 YOUNG MINDS.</p>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/500x300" alt="Children playing" />
        </div>
      </section>
      <section className="welcome">
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