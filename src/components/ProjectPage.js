// ProjectPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPage.css';

const ProjectPage = ({ projects }) => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Find the project by id (assuming id is the index in the array)
    const projectData = projects[id];
    setProject(projectData);
  }, [id, projects]);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="project-page">
      {/* Left Container - 2/3 width */}
      <div className="left-container">
        {/* First Row */}
        <div className="first-row">
          <div className="left-column">
            <div className="project-image">
              <img src={`${process.env.PUBLIC_URL}/${project.imageSrc}`} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
          </div>
          <div className="middle-column">
            <div className="project-description">
              <p className="justified-text">{project.description}</p>
            </div>
          </div>
          <div className="right-column"></div>
        </div>
        {/* Second Row */}
        <div className="second-row">
          <div className="project-imgs">
            {project.imgs.map((imgPath, index) => (
              <img key={index} src={`${process.env.PUBLIC_URL}/${imgPath}`} alt={`${index + 1}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Container - 1/3 width */}
      <div className="right-container">
        <div className="project-info">
          <div className="fixed-info">
            <p className="info-text">{project.info.year}</p>
            <p style={{ marginBottom: 0 }}>in collaboration with</p>
            {project.info.colab.map((collaborator, index) => (
              // <p key={index} style={{ margin: 0 }}>{collaborator.name}</p>
              <p key={index} className="colab-text">
                {collaborator.link ? (
                  <a href={collaborator.link} target="_blank" rel="noopener noreferrer">
                    {collaborator.name}
                  </a>
                ) : (
                  collaborator.name
                )}
              </p>
            ))}
            <p>{project.info.type}</p>
            <p>{project.info.assignment}</p>
            <p>course led by <br/>{project.info.course}</p>
            <p>{project.info.uni}</p>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default ProjectPage;
