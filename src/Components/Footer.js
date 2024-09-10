import React, { useEffect, useState } from 'react';
import './Footer.css'; 
 
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'footer-slide visible' : 'footer-slide'}`}>
      <div className="footer-content">
        <div className="social-icons left">
          <a href="https://www.linkedin.com/in/luis-carlos-lima-loyo-688201148/" target="_blank" rel="noopener noreferrer">
            <img src="../images/Linkedin.png" alt="LinkedIn" className="social-icon" />
          </a>
        </div>
        <p className="footer-text">© 2024 Your Company</p>
        <div className="social-icons right">
          <a href="https://github.com/NighthawkL06?tab=repositories" target="_blank" rel="noopener noreferrer">
            <img src="../images/Github.png" alt="GitHub" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
