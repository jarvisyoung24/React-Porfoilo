

import React from 'react';
import './Footer.css'; // Import custom CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Name. All Rights Reserved.</p>
        <ul className="social-links">
          <li>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;