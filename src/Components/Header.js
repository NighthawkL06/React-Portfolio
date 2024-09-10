import React, { useState } from 'react';
import './Header.css'; // Import CSS file for styling

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <header 
      className="header"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className={`header-text ${isHovered ? 'hovered' : ''}`}>
        {isHovered ? 'To My Portfolio' : 'Welcome'}
      </h1>
    </header>
  );
};

export default Header;
