import React, { useEffect, useState } from 'react';
import './Footer.css'; // Ensure this path is correct based on your project structure

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100); // Show footer if scrolled more than 100px
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'footer-slide visible' : 'footer-slide'}`}>
      <p className="footer-text">© 2024 Your Company</p>
    </footer>
  );
};

export default Footer;
