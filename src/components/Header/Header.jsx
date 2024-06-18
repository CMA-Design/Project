import React from 'react';
import '../../fonts/Life is goofy.ttf';
import '../../fonts/OstrichSans-Heavy.otf';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Cheerful Mind Academy Logo" />
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
          }}
        > Cheerful Mind Academy</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/" style={{ fontFamily: 'Public Sans', fontSize: 18 }}>Home</a></li>
          <li><a href="/our-programs" style={{ fontFamily: 'Public Sans', fontSize: 18 }}>Our Programs</a></li>
          <li><a href="/after-school-programs" style={{ fontFamily: 'Public Sans', fontSize: 18 }}>After School Programs</a></li>
          <li><a href="/testimonials" style={{ fontFamily: 'Public Sans', fontSize: 18 }}>Testimonials</a></li>
          <li><a href="/gallery" style={{ fontFamily: 'Public Sans', fontSize: 18 }}>Gallery</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;