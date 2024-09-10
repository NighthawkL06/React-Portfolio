import React from 'react';
import './AboutMe.css'; // Import CSS file for styling

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-photo">
        <img
          src="https://via.placeholder.com/150" // Replace with your LinkedIn photo URL
          alt="Profile"
          className="profile-photo"
        />
      </div>
      <div className="about-me-text">
        <h2>About Me</h2>
        <p>
          Hello! I’m [Your Name], a passionate [Your Profession] with a love for [Your Interests]. 
          I have experience in [Briefly describe your experience or skills], and I’m excited about 
          [What you’re currently working on or interested in]. Connect with me on [LinkedIn](https://www.linkedin.com/in/your-profile).
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
