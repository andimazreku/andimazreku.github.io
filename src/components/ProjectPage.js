// ProjectPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectPage.css";

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

  const embedYouTubeVideos = (videos) => {
    return videos.map((video, index) => {
      // Extract the YouTube video ID from the video link
      const videoId = video.split("v=")[1];
      if (videoId) {
        // Embed the YouTube video using an iframe
        return (
          <div key={index}>
            <iframe
              title={`YouTube Video ${index}`}
              src={`https://www.youtube.com/embed/${videoId}`}
              allowFullScreen
            ></iframe>
          </div>
        );
      }
      return null; // Invalid YouTube link
    });
  };

  return (
    // <div className="project-page">
    <div className={`project-page ${window.innerWidth <= 768 ? 'mobile-view' : ''}`}>
      
      {/* Left Container - 2/3 width */}
      <div className="left-container">
        {/* First Row */}
        <div className="first-row">
          <div className="left-column">
            <div className="project-image">
              <img
                src={`${process.env.PUBLIC_URL}/${project.imageSrc}`}
                alt={project.title}
              />
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
          {project.video && project.video.length > 0 && (
            <div className="video-section">
              {embedYouTubeVideos(project.video)}
            </div>
          )}
        </div>

        {/* Third Row */}
        <div className="third-row">
          <div className="project-imgs">
            {project.imgs.map((imgPath, index) => (
              <img
                key={index}
                src={`${process.env.PUBLIC_URL}/${imgPath}`}
                alt={`${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Container - 1/3 width */}
      <div className="right-container">
        {/* <div className="project-info"> */}
        <div className={`project-info ${window.innerWidth <= 768 ? 'fixed-info-mobile' : ''}`}>
          <div className="fixed-info">
            <p style={{marginTop:0}}>{project.info.type}</p>
            <p>{project.info.size}</p>
            <p>{project.info.media}</p>
            {project.info.interviewees &&
            project.info.interviewees.length > 0 ? (
              <p style={{ marginBottom: 0 }}>
                <em>interviewees</em>
              </p>
            ) : (
              <></>
            )}
            {project.info.interviewees.map((interviewee, index) => (
              // <p key={index} style={{ margin: 0 }}>{collaborator.name}</p>
              <p key={index} className="colab-text">
                {interviewee.link ? (
                  <a
                    href={interviewee.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {interviewee.name}
                  </a>
                ) : (
                  interviewee.name
                )}
              </p>
            ))}
            {project.info.assistance && project.info.assistance.length > 0 ? (
              <p style={{ marginBottom: 0 }}>
                <em>assistance</em>
              </p>
            ) : (
              <></>
            )}
            {project.info.assistance.map((assistant, index) => (
              // <p key={index} style={{ margin: 0 }}>{collaborator.name}</p>
              <p key={index} className="colab-text">
                {assistant.link ? (
                  <a
                    href={assistant.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {assistant.name}
                  </a>
                ) : (
                  assistant.name
                )}
              </p>
            ))}
            {project.info.colab && project.info.colab.length > 0 ? (
              <p style={{ marginBottom: 0 }}>
                <em>in collaboration with</em>
              </p>
            ) : (
              <></>
            )}
            {project.info.colab.map((collaborator, index) => (
              // <p key={index} style={{ margin: 0 }}>{collaborator.name}</p>
              <p key={index} className="colab-text">
                {collaborator.link ? (
                  <a
                    href={collaborator.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {collaborator.name}
                  </a>
                ) : (
                  collaborator.name
                )}
              </p>
            ))}
            {project.info.model && project.info.model.length > 0 ? (
              <p style={{ marginBottom: 0 }}>
                <em>model</em>
              </p>
            ) : (
              <></>
            )}
            {project.info.model.map((model_, index) => (
              <p key={index} className="colab-text">
                {model_.link ? (
                  <a
                    href={model_.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {model_.name}
                  </a>
                ) : (
                  model_.name
                )}
              </p>
            ))}
            <p className="info-text" style={{ marginTop: 16 }}>
              {project.info.year}
            </p>
            {/* <p>{project.info.assignment}</p> */}
            {project.info.course && project.info.course.length > 0 ? (
              <p>
                <em>course</em>
                <br />
                {project.info.course}
              </p>
            ) : (
              <></>
            )}

            {project.info.ledby && project.info.ledby.length > 0 ? (
              <p>
                <em>led by </em>
                <br />
                {project.info.ledby}
                <br />
                {project.info.uni}
              </p>
            ) : (
              <></>
            )}
            {/* <p>{project.info.uni}</p> */}
            {/* ... Other project info ... */}
            {project.info.exhibition && project.info.exhibition.length > 0 && (
              <div>
                {" "}
                <p style={{ marginBottom: 0 }}>
                  <em>exhibited at</em>
                </p>
                {project.info.exhibition.map((exhibition, index) => (
                  <div key={index}>
                    <p key={index} className="colab-text">
                      {exhibition.link ? (
                        <a
                          href={exhibition.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {exhibition.name}
                        </a>
                      ) : (
                        exhibition.name
                      )}
                    </p>
                    <p style={{ margin: 0 }}>{exhibition.place}</p>
                    <p style={{ marginTop: 0 }}>{exhibition.time}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
