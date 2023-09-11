// About.js
import React from 'react';
import './About.css';

const About = () => {
  // Define an array of image sources
  const imageSources = [
    'assets/about/64.png',
    'assets/about/65.png',
    'assets/about/66.png',
    'assets/about/67.png',
    'assets/about/68.png',
    'assets/about/69.png',
    // Add more image sources as needed
  ];

  return (
    <div className="about">
      <div className="top-left-text">
        (aspiring) visual artist<br />
        communication design student<br />
        berlin
      </div>
      <div className="gallery">
        {imageSources.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
