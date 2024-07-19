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
        style={{ ...style, display: 'block', margin: '90 auto', width: '80px', height: '100px', marginRight: '-64px' }}
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
        style={{ ...style, display: 'block', margin: '0 auto', width: '80px', height: '100px', marginLeft:'-40px' }}
        onClick={onClick}
      />
    );
  }

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
        </div>
        <div className='Border'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1347" height="1101" viewBox="0 0 1920 1101" fill="none">
            <path d="M122.437 42.3259C97.0395 44.5734 28.8182 35.6524 -2.11774 30.9109L2.83718e-05 1100.05H1922.7L1920 26.0616C1925.36 25.363 1695.19 25.4328 1660.26 31.3013C1616.59 38.6369 1461.9 48.9407 1366.77 40.6396C1290.67 33.9987 1084.91 24.7994 991.545 21.0299C967.74 21.1361 911.204 23.8992 875.497 34.1012C839.79 44.3032 797.707 49.6167 781.128 50.9983C749.566 54.2927 671.967 54.3139 614.071 28.0438C556.174 1.77365 487.519 -0.630809 460.428 1.45073C448.029 4.50325 406.778 13.3237 325.031 19.7985C160.059 25.5948 154.465 36.707 122.437 42.3259Z" fill="#FFCA32"/>
          </svg>
        </div>
        <div 
          onMouseOver={()=>{setIsHovered(true)}} 
          onMouseOut={()=>{setIsHovered(false)}}
          className="arrow-button"
        >
          {isHovered && (
            <div className="arrow-text">
              {Array.from("LET'S").map((letter, index) => (
                <span key={index} className="left-text" style={{ animationDelay: `${index * 0.1}s` }}>
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
                <span key={index} className="right-text" style={{ animationDelay: `${index * 0.1}s` }}>
                  {letter}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="welcome">
        <div className='Border2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1370" height="1100" viewBox="0 0 1920 1128" fill="none">
            <path d="M125.135 1089.09C99.7374 1087 31.5162 1095.29 0.580243 1099.69L0 0.0490723H1922.7V1104.2C1928.05 1104.85 1697.89 1104.78 1662.96 1099.33C1619.29 1092.52 1464.59 1082.94 1369.47 1090.65C1293.37 1096.82 1087.61 1105.37 994.243 1108.87C970.438 1108.77 913.902 1106.21 878.195 1096.73C842.488 1087.25 800.405 1082.31 783.826 1081.03C752.264 1077.97 674.665 1077.95 616.769 1102.36C558.872 1126.76 490.217 1129 463.126 1127.06C450.727 1124.23 409.476 1116.03 327.729 1110.02C162.757 1104.63 157.163 1094.31 125.135 1089.09Z" fill="#FFCA32"/>
          </svg>
        </div>
        <button className="welcome-button" onMouseOver={()=>{setIsHovered(true)}} onMouseOut={()=>{setIsHovered(false)}}>
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
              <img src="CardImg5.png" alt="Image 5" className="CardImage"/>
              <h4>ECOLOGICAL LEARNING</h4>
              <p>We instill a sense of environmental responsibility through nature-based learning experiences, gardening activities, and lessons on conservation, nurturing a deep connection with the natural world.</p>
            </div>
            <div className='Card'>
              <img src="CardImg6.png" alt="Image 5" className="CardImage"/>
              <h4>HOLISTIC EDUCATION</h4>
              <p>We nurture the physical, emotional, social, and cognitive development of each child, providing a well-rounded education that prepares them for future challenges and opportunities.</p>
            </div>
            <div className='Card'>
              <img src="CardImg7.png" alt="Image 5" className="CardImage"/>
              <h4>SOCIAL-EMOTIONAL LEARNING</h4>
              <p>Our curriculum emphasises social-emotional skills such as empathy, cooperation, resilience, fostering positive relationships, emotional well-being, and effective communication among students.</p>
            </div>
            <div className='Card'>
              <img src="CardImg8.png" alt="Image 5" className="CardImage"/>
              <h4>PARENT PARTNERSHIP</h4>
              <p>We believe fostering partnerships with parents, involving child's learning. Through collaboration, shared decision-making, create supportive community.</p>
            </div>
          </Slider>
        </div>
      </section>
      <section className='Our_Philosophy'>
        <button className="ourp-button" onMouseOver={()=>{setIsHovered(true)}} onMouseOut={()=>{setIsHovered(false)}}>
          <span className="ourp-text">OUR PHILOSOPHY</span>
        </button>
        <h1>Nurturing a Vibrant Community</h1>
        <p>We instill in each child a love for learning, curiosity, and a foundation for lifelong success. Our unique blend of the play way method and Montessori approach creates a joyful, engaging, and meaningful learning environment where children thrive, explore, and develop a lifelong love for learning.</p>
        <div className='Border3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1372" height="1100" viewBox="0 0 1920 121" fill="none">
            <path d="M790.558 6.8392C864.57 2.98486 911.838 1.13479 956.319 0.363922C1005.44 -0.484032 1082.52 1.05771 1125.79 3.75574C1173.81 6.68502 1180.77 7.76418 1185.97 13.2373C1188.94 16.2437 1192.1 17.7854 1197.58 18.6334C1199.25 18.9417 1218.29 19.8668 1239.83 20.7147C1426.49 28.0379 1492.51 32.5089 1536.25 40.9114C1550.18 43.5323 1559.75 47.3096 1558.63 49.7763C1558.35 50.393 1558.54 50.6243 1559 50.393C1559.56 50.1618 1559.93 50.4701 1559.93 51.1639C1559.93 55.712 1585.01 60.0289 1670.9 70.4356C1689.2 72.6711 1743.06 80.1485 1754.95 82.0756C1772.87 85.082 1787.45 88.1655 1803.42 92.4052C1826.08 98.3409 1903.06 113.845 1903.89 113.074C1910.24 114.877 1921.73 118.202 1924.28 120.022L1901.67 120.156H1426.16H950.655C-0.269043 120.156 -1.83782 122.004 -1.55923 120.231C-1.3735 118.843 4.93101 114.76 27.2183 105.51C67.9854 88.5509 109.217 74.3669 151.656 62.881C216.567 45.3053 248.605 40.9114 283.522 44.9199C290.208 45.6908 297.266 46.0762 299.309 45.7678C301.352 45.5366 310.545 43.6094 319.739 41.5281C419.474 18.7105 553.012 4.44952 656.834 5.45164C685.529 5.75999 687.85 5.83707 693.794 7.45589C699.923 9.22887 715.059 10.6935 721.374 10.2309C723.139 10.0768 733.168 9.61426 743.661 9.15174C754.155 8.68922 775.235 7.61005 790.558 6.8392Z" fill="#316ADF"/>
          </svg>
        </div>
      </section>
      <section className='Our_Programs'>
        <div className='Box' style={{ width: '1352px', height: '1000px', backgroundColor: '#316ADF' }} />
        <button className="ourP-button" onMouseOver={()=>{setIsHovered(true)}} onMouseOut={()=>{setIsHovered(false)}}>
          <span className="ourP-text">OUR PROGRAMS</span>
        </button>
        <div className='PC1'>
          <img src="pc1.png" alt="IMG 1" className='IP1'/>
          <li className='HP1' style={{fontSize: '40px', listStyle: 'none', colour: 'black'}}><a href='../OurPrograms/Playgroup'>PLAYGROUP</a></li>
        </div>
      </section>
      <section className='AS_Programs'>
        <div className='Border4'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1347" height="1101" viewBox="0 0 1920 1101" fill="#316ADF">
            <path d="M1131.15 130.904C1057.14 135.323 1009.87 137.445 965.391 138.328C916.266 139.301 839.19 137.533 795.915 134.439C747.905 131.08 740.94 129.843 735.74 123.567C732.768 120.12 729.611 118.352 724.132 117.38C722.46 117.026 703.423 115.965 681.879 114.993C495.223 106.596 429.197 101.469 385.458 91.8343C371.529 88.829 361.964 84.4978 363.078 81.6693C363.357 80.9621 363.171 80.697 362.707 80.9621C362.15 81.2273 361.778 80.8737 361.778 80.0782C361.778 74.8631 336.705 69.9131 250.806 57.9802C232.512 55.4168 178.651 46.8428 166.764 44.633C148.842 41.1857 134.262 37.65 118.29 32.7885C95.6309 25.9823 18.6512 8.20485 17.8154 9.08877C11.4662 7.02134 -0.0159912 3.20817 -2.56726 1.12151L20.0399 0.967366H495.548H971.055C1921.98 0.967366 1923.55 -1.15108 1923.27 0.881933C1923.08 2.47299 1916.78 7.15479 1894.49 17.7618C1853.72 37.2081 1812.49 53.4722 1770.05 66.6426C1705.14 86.796 1673.1 91.8343 1638.19 87.238C1631.5 86.354 1624.44 85.9121 1622.4 86.2656C1620.36 86.5308 1611.16 88.7406 1601.97 91.1272C1502.24 117.291 1368.7 133.644 1264.88 132.495C1236.18 132.141 1233.86 132.053 1227.92 130.196C1221.79 128.163 1206.65 126.484 1200.34 127.014C1198.57 127.191 1188.54 127.721 1178.05 128.252C1167.55 128.782 1146.47 130.02 1131.15 130.904Z" fill="#316ADF"/>
          </svg>
        </div>
      </section>
      <section className='Events'>

      </section>
      <section className='Testimonials'>
        <div className='Lines'>
          <img src="Lines.png" alt="Image 1" className='Line'/>
        </div>
      </section>
      <section className='FAQ'>
        <div className='Border5'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1347" height="1300" viewBox="0 0 1920 1738" fill="none">
            <path d="M124.669 1718.25C99.266 1717.18 -30.4823 1721.43 -61.4247 1723.69L-62 0H1983.93L1983.93 1726C1989.28 1726.33 1697.75 1726.3 1662.81 1723.5C1619.14 1720.01 1464.41 1715.1 1369.26 1719.05C1293.14 1722.22 1087.34 1726.6 993.958 1728.4C970.148 1728.35 913.6 1727.03 877.886 1722.17C842.171 1717.31 800.079 1714.78 783.498 1714.12C751.929 1712.55 674.314 1712.54 616.405 1725.06C558.497 1737.57 489.827 1738.72 462.731 1737.72C450.329 1736.27 409.069 1732.07 327.305 1728.98C162.299 1726.22 156.703 1720.93 124.669 1718.25Z" fill="#173683"/>
          </svg>
        </div>
      </section>
      <section className='Connect'>
      </section>
    </div> 
  );
}

export default HomePage;