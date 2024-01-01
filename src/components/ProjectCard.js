// ProjectCard.js
import React, { useState } from 'react';
import './ProjectCard.css';


const ProjectCard = React.memo(({ imageSrc, videoSrc, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <video
          src={videoSrc}
          alt={title}
          className="project-video"
          autoPlay
          loop
          muted
          playsInline
          loading="eager"
        />
      ) : (
        <img
          src={imageSrc}
          alt={title}
          className="project-image"
          loading="eager"
        />
      )}
      <h3>{title}</h3>
    </div>
  );
});

export default ProjectCard;
