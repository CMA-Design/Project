import React from 'react';
import { useState } from 'react';
import './HomePage.css';
import '../../fonts/Life is goofy.ttf';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../fonts/OstrichSans-Heavy.otf';
import { Link } from 'react-router-dom';

function HomePage() {

  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  }

  function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        src="Frame 24.png"
        alt="Next Arrow"
        className={className}
        style={{ ...style, display: 'block', width: '80px', height: '100px', marginRight: '-61px' }}
        onClick={onClick}
      />
    );
  }

  function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        src="Frame 23.png"
        alt="Previous Arrow"
        className={className}
        style={{ ...style, display: 'block', margin: '0 auto', width: '80px', height: '100px', marginLeft: '-62px' }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className='HomePage'>
      <header className="header">
        <div className="logo">
          <img src="favicon.ico" alt="Cheerful Mind Academy Logo" />
          <div className="title">
            <h1> CHEERFUL MIND ACADEMY</h1>
          </div>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#ourProgram">Our Programs</a></li>
            <li><a href="#after-school-programs">After School Programs</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero" id='hero'>
        <div className="banner">
          <h3>CHEERFUL MIND ACADEMY</h3>
        </div>
        <div className="content">
          <p>WELCOME TO CHEERFUL MIND ACADEMY</p>
          <p>A BEACON OF EARLY CHILDHOOD EDUCATION EXCELLENCE </p>
          <p>WITH A LEGACY FOR OVER 25 YEARS AND 10,000 YOUNG MINDS.</p>
        </div>
        
        <div className='Border'>
          <img src="Border.png" alt="Border1"/>
        </div>
        <div className="arrowbox">
        <div
          onMouseOver={() => { setIsHovered(true) }}
          onMouseOut={() => { setIsHovered(false) }}
          className="arrow-button"
        >
          {isHovered && (
            <div className="arrow-text">
              {Array.from("LET'S").map((letter, index) => (
                <span key={index} className="left-text" >
                  {letter}
                </span>
              ))}
            </div>
          )}
          <img
            src="Arrow.png"
            alt="Arrow"
            className="arrow"
          />
          {isHovered && (
            <div className="arrow-text">
              {Array.from("BEGIN").map((letter, index) => (
                <span key={index} className="right-text">
                  {letter}
                </span>
              ))}
            </div>
          )}
        </div>
        </div>
      </section>
      <section className="welcome">
        <div className='Border2'>
          <img src="Border2.png" alt="Border2" />
        </div>
        <button className="welcome-button" onMouseOver={() => { setIsHovered(true) }} onMouseOut={() => { setIsHovered(false) }}>
          <span className="welcome-text">WELCOME</span>
        </button>
        <h2>"WHERE PLAY IS PURPOSEFUL AND LEARNING IS PLAYFUL"</h2>
        <p>Our philosophy revolves around the idea that children learn best through play. Play is not just a way for children to pass the time; it is their way of understanding the world, experimenting with ideas, and developing crucial skills. We embrace this philosophy wholeheartedly and weave it into every aspect of our curriculum and daily activities.</p>
        <div className='Cards'>
          <Slider {...settings}>
            <div className='Card'>
              <img src="CardImg1.png" alt="Image 1" className="CardImage" />
              <h4>INQUIRY-BASED LEARNING</h4>
              <p>Our curriculum is built around inquiry, encouraging children to ask questions, investigate, and make discoveries through hands-on experiences.</p>
            </div>
            <div className='Card'>
              <img src="CardImg2.png" alt="Image 2" className="CardImage" />
              <h4>PLAY-BASED APPROACH</h4>
              <p>We believe in the power of play as a natural and effective way for children to learn, develop social skills, and express their creativity.</p>
            </div>
            <div className='Card'>
              <img src="CardImg3.png" alt="Image 3" className="CardImage" />
              <h4>CULTURAL DIVERSITY</h4>
              <p>We celebrate diversity and promote cultural understanding, preparing children to be global citizens with respect for different perspectives and backgrounds.</p>
            </div>
            <div className='Card'>
              <img src="CardImg4.png" alt="Image 3" className="CardImage" />
              <h4>1:5 STUDENT TEACHER RATIO</h4>
              <p>Our small class sizes ensure personalised attention, meaningful interactions, and individualised support for every child's learning journey.</p>
            </div>
            <div className='Card'>
              <img src="CardImg5.png" alt="Image 5" className="CardImage" />
              <h4>ECOLOGICAL LEARNING</h4>
              <p>We instill a sense of environmental responsibility through nature-based learning experiences, gardening activities, and lessons on conservation, nurturing a deep connection with the natural world.</p>
            </div>
            <div className='Card'>
              <img src="CardImg6.png" alt="Image 5" className="CardImage" />
              <h4>HOLISTIC EDUCATION</h4>
              <p>We nurture the physical, emotional, social, and cognitive development of each child, providing a well-rounded education that prepares them for future challenges and opportunities.</p>
            </div>
            <div className='Card'>
              <img src="CardImg7.png" alt="Image 5" className="CardImage" />
              <h4>SOCIAL-EMOTIONAL LEARNING</h4>
              <p>Our curriculum emphasises social-emotional skills such as empathy, cooperation, resilience, fostering positive relationships, emotional well-being, and effective communication among students.</p>
            </div>
            <div className='Card'>
              <img src="CardImg8.png" alt="Image 5" className="CardImage" />
              <h4>PARENT PARTNERSHIP</h4>
              <p>We believe fostering partnerships with parents, involving child's learning. Through collaboration, shared decision-making, create supportive community.</p>
            </div>
          </Slider>
        </div>
      </section>
      <section className='Our_Philosophy'>
        <button className="ourp-button" onMouseOver={() => { setIsHovered(true) }} onMouseOut={() => { setIsHovered(false) }}>
          <span className="ourp-text">OUR PHILOSOPHY</span>
        </button>
        <h1>Nurturing a Vibrant Community</h1>
        <p>We instill in each child a love for learning, curiosity, and a foundation for lifelong success. Our unique blend of the play way method and Montessori approach creates a joyful, engaging, and meaningful learning environment where children thrive, explore, and develop a lifelong love for learning.</p>
        <div className='Border3'>
          <img src="Border3.png" alt="Border3"/>
        </div>
      </section>
      <section className='Our_Programs' id='ourProgram'>
        <div className='Box' style={{ width: '100%', height: '1000px', backgroundColor: '#316ADF' }} />
        <button className="ourP-button" onMouseOver={() => { setIsHovered(true) }} onMouseOut={() => { setIsHovered(false) }}>
          <span className="ourP-text">OUR PROGRAMS</span>
        </button>
        <div className='Playgroup'>
          <img src="pc1.png" alt="IMG 1" className='IP1' />
          <li className='HP1' style={{ fontSize: '40px', listStyle: 'none', colour: 'black' }}><a href='../OurPrograms/Playgroup'>PLAYGROUP</a></li>
        </div>
        <div className='Pre-nursery'>
          <img src="pc2.png" alt="IMG 2"  className='IP2'/>
          <li className='HP2' style={{fontsize:  '40px', listStyle: 'none', colour: 'black'}}><a href='../OurPrograms/Pre-Nursery'>Pre-Nursery</a></li>
        </div>
        <div className='Nursery'>
          <img src="pc3.png" alt="IMG 3"  className='IP3'/>
          <li className='HP3' style={{fontsize:  '40px', listStyle: 'none', colour: 'black'}}><a href='../OurPrograms/Nursery'>Nursery</a></li>
        </div>
        <div className='Kindergarten'>
          <img src="pc4.png" alt="IMG 4"  className='IP4'/>
          <li className='HP4' style={{fontsize:  '40px', listStyle: 'none', colour: 'black'}}><a href='../OurPrograms/Kindergarten'>Kindergarten</a></li>
        </div>
      </section>
      <section className='AS_Programs'>
        <div className='Border4'>
          <img src="Border4.png" alt="Border4"/>
        </div>
      </section>
      <section className='Events'>

      </section>
      <section className='Testimonials'>
        <div className='Lines'>
          <img src="Lines.png" alt="Image 1" className='Line' />
        </div>
      </section>
      <section className='FAQ'>
        <div className='Border5'>
        </div>
      </section>
      <section className='Connect'>
      </section>
      <footer className='footer'>
        <div className="container">
          <div className="footer-brand">
            <img src="logo.svg" alt="Cheerful Mind Academy" />
          </div>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="footer-contact">
            <p>
              4&5, Vidhyut-C & D, Ground Floor. ISS Road. Opp.St. Xavier Street.
              Thakurdwar, Mumbai-400002
            </p>
            <p>
              <a href="tel:9987450006">9987450006</a>,{' '}
              <a href="tel:9987450002">9987450002</a>
            </p>
          </div>
          <div className="footer-copyright">
            <p>Copyright 2024 Cheerful Mind Academy All Rights Reserved.</p>
            <p>
              <a href="#">Privacy Policy</a> &nbsp;
              <a href="#">Terms & Conditions</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;