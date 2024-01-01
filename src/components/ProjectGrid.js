// ProjectGrid.js
import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectGrid.css';
import { Link } from 'react-router-dom'; 

const ProjectGrid = React.memo(({ projects }) => {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <Link to={`/project/${index}`} key={index}>
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            videoSrc={project.videoSrc}
            title={project.title}
          />
        </Link>
      ))}
    </div>
  );
});

export default ProjectGrid;
