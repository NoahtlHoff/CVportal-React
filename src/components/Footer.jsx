import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="about-footer">
          <h3>ABOUT ME</h3>
          <p>
            Welcome to my website! I'm Noah Hoff, a developer and designer passionate about modern web experiences.
            I specialize in responsive design and intuitive digital solutions.
            <NavLink to="/about/about-me" className="read-more">
              READ MORE
            </NavLink>
          </p>
        </div>
        <div className="contact-social">
          <div className="contact-follow">
            <NavLink to="/contact" className="contact-me">
              CONTACT ME
            </NavLink>
            <span className="divider">//</span>
            <span className="follow">FOLLOW ME:</span>
          </div>
          <ul className="social">
            <li>
              <a href="https://se.linkedin.com/in/noah-hoff-aa86b1326">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/NoahtlHoff">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/noah.hoff.5/">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/noahtlhoff">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 Noah Hoff. All rights reserved.
      </div>
    </footer>
  );
}
