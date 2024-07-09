import React from 'react';
import { useState } from 'react';
import './HomePage.css';
import '../../fonts/Life is goofy.ttf';
import '../../fonts/OstrichSans-Heavy.otf';

function HomePage() {
  const [isHovered, setIsHovered] = useState(false);

  // const handleMouseOver = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovered(false);
  // };


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
        <div className="pillar">
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
        <div className='Border3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1370" height="1100" viewBox="0 0 1920 121" fill="none">
            <path d="M790.558 6.8392C864.57 2.98486 911.838 1.13479 956.319 0.363922C1005.44 -0.484032 1082.52 1.05771 1125.79 3.75574C1173.81 6.68502 1180.77 7.76418 1185.97 13.2373C1188.94 16.2437 1192.1 17.7854 1197.58 18.6334C1199.25 18.9417 1218.29 19.8668 1239.83 20.7147C1426.49 28.0379 1492.51 32.5089 1536.25 40.9114C1550.18 43.5323 1559.75 47.3096 1558.63 49.7763C1558.35 50.393 1558.54 50.6243 1559 50.393C1559.56 50.1618 1559.93 50.4701 1559.93 51.1639C1559.93 55.712 1585.01 60.0289 1670.9 70.4356C1689.2 72.6711 1743.06 80.1485 1754.95 82.0756C1772.87 85.082 1787.45 88.1655 1803.42 92.4052C1826.08 98.3409 1903.06 113.845 1903.89 113.074C1910.24 114.877 1921.73 118.202 1924.28 120.022L1901.67 120.156H1426.16H950.655C-0.269043 120.156 -1.83782 122.004 -1.55923 120.231C-1.3735 118.843 4.93101 114.76 27.2183 105.51C67.9854 88.5509 109.217 74.3669 151.656 62.881C216.567 45.3053 248.605 40.9114 283.522 44.9199C290.208 45.6908 297.266 46.0762 299.309 45.7678C301.352 45.5366 310.545 43.6094 319.739 41.5281C419.474 18.7105 553.012 4.44952 656.834 5.45164C685.529 5.75999 687.85 5.83707 693.794 7.45589C699.923 9.22887 715.059 10.6935 721.374 10.2309C723.139 10.0768 733.168 9.61426 743.661 9.15174C754.155 8.68922 775.235 7.61005 790.558 6.8392Z" fill="#316ADF"/>
          </svg>
        </div>
      </section>
      <section className='Our Philosophy'>
        <h2>Nurturing a Vibrant Community</h2>
        <p>We instill in each child a love for learning, curiosity, and a foundation for lifelong success. Our unique blend of the play way method and Montessori approach creates a joyful, engaging, and meaningful learning environment where children thrive, explore, and develop a lifelong love for learning.</p>
      </section>
      <section className='Our Programs'>
      </section>
    </div> 
  );
}

export default HomePage;