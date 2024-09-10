import React from 'react';
import './Links.css';   

const Links = () => {
  const links = [
    { 
      url: 'https://github.com/username/repo1', 
      imgSrc: 'https://via.placeholder.com/150?text=Repo1', 
      alt: 'Repo 1' 
    },
    { 
      url: 'https://github.com/username/repo2', 
      imgSrc: 'https://via.placeholder.com/150?text=Repo2', 
      alt: 'Repo 2' 
    },
    { 
      url: 'https://github.com/username/repo3', 
      imgSrc: 'https://via.placeholder.com/150?text=Repo3', 
      alt: 'Repo 3' 
    },
    { 
      url: 'https://github.com/username/repo4', 
      imgSrc: 'https://via.placeholder.com/150?text=Repo4', 
      alt: 'Repo 4' 
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
