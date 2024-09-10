import React, { useState } from 'react';
import './Body.css';

function Body() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillInfo = {
    JavaScript: 'JavaScript is a versatile programming language used primarily for web development. It enables interactive web pages and is a core technology alongside HTML and CSS.',
    React: 'React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components.',
    'Node.js': 'Node.js is a runtime environment that allows JavaScript to be run on the server side. It is widely used for building scalable network applications and APIs.'
  };

  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {Object.keys(skillInfo).map(skill => (
          <li key={skill}>
            <button
              className="skill-button"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {skill}
            </button>
            {hoveredSkill === skill && (
              <div className="skill-info">
                {skillInfo[skill]}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Body;
