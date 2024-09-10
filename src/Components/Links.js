import React from 'react';
import './Links.css';   

const Links = () => {
  const links = [
    { 
      url: 'https://github.com/NighthawkL06/Logo-Generator', 
      imgSrc: 'https://via.placeholder.com/150?text=Repo1', 
      alt: 'Repo 1' 
    },
    { 
      url: 'https://github.com/NighthawkL06/Note-Taker', 
      imgSrc: 'https://via.placeholder.com/150?text=Repo2', 
      alt: 'Repo 2' 
    },
    { 
      url: 'https://github.com/NighthawkL06/React-Portfolio', 
      imgSrc: 'https://via.placeholder.com/150?text=Repo3', 
      alt: 'Repo 3' 
    },
    { 
      url: 'https://github.com/username/repo4', 
      imgSrc: 'https://github.com/NighthawkL06/MVC', 
      alt: 'Repo 4' 
    },
    { 
      url: 'https://github.com/NighthawkL06/Code-Refactor', 
      imgSrc: 'https://via.placeholder.com/150?text=Repo5', 
      alt: 'Repo 5' 
    },
    { 
      url: 'https://github.com/NighthawkL06/PythonTest', 
      imgSrc: 'https://via.placeholder.com/150?text=Repo6', 
      alt: 'Repo 6' 
    }
  ];

  return (
    <div className="links-page">
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          <img src={link.imgSrc} alt={link.alt} className="link-image" />
        </a>
      ))}
    </div>
  );
};

export default Links;
