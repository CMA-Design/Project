import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
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
  )
}

export default Footer
