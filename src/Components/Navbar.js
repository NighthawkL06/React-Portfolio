import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/main.css'; 

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Resume', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Portfolio', path: '/links' }
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`navbar-item ${hoveredIndex === index ? 'glow' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={item.path} className="navbar-link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
