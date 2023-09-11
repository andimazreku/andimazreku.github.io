// ProjectList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <Link to={`/project/${index}`}> {/* Use the project index as the parameter */}
            <img src={project.imageSrc} alt={project.title} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
