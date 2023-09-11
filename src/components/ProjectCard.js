// ProjectCard.js
import React, { useState } from 'react';

const ProjectCard = ({ imageSrc, gifSrc, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? gifSrc : imageSrc}
        //src={imageSrc}
        alt={title}
        className="project-image"
      />
      <h3>{title}</h3>
    </div>
  );
};

export default ProjectCard;
