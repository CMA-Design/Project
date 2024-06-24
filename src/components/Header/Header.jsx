import React from 'react';
import '../../fonts/Life is goofy.ttf';
import '../../fonts/OstrichSans-Heavy.otf';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="favicon.ico" alt="Cheerful Mind Academy Logo" />
        <div className="title">
          <h1
            style={{
              color: 'var(--accent-main, #E63747)',
              textAlign: 'left',
              fontFamily: 'Life is Goofy',
              fontSize: '55.296px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              letterSpacing: '-1.106px'
            }}>Cheerful Mind Academy</h1>
        </div>
      </div>
      <nav className="nav">
        <ul style={{
          color: 'var(--accent-main, #E63747)',
          textAlign: 'center',
          fontFamily: 'Public Sans',
          fontSize: 22,
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          letterSpacing: '-1.28px'
        }}>
          <li><a href="/">Home</a></li>
          <li><a href="/our-programs">Our Programs</a></li>
          <li><a href="/after-school-programs">After School Programs</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/gallery">Gallery</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;