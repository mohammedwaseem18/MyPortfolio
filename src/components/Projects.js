import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";
import projectsData from "./data";

function Projects() {
  return (
    <div>
      <section className="projects">
        <h1>My Projects</h1>
        <div className="project-container">
          {projectsData.map((project) => (
            <div className="project" key={project.id}>
              <a
                
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project.imageSrc} alt={project.title} />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-link">
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;

