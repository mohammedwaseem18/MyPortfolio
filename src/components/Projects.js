import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-container">
          <div className="project">
            <a
              href="https://react-netflix-demo.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/341/654/datas/original.PNG"
                alt="Project 1"
              />
              <div className="project-overlay">
                <h3>Netflix-Clone</h3>
                <p>
                  Netflix clone made using React-js. Used tmdb ---api to fetch
                  images.
                </p>
                <div className="project-link">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </div>
            </a>
          </div>
          {/* Rest of the projects */}
          <div className="project">
            <a
              href="https://duplicate-tesla.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="data:image/jpeg;base64,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"
                alt="Project 1"
              />
              <div className="project-overlay">
                <h3>Tesla-Clone</h3>
                <p>
                  Tesla clone made using React-js. Used styled-components for styling
                
                </p>
                <div className="project-link">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </div>
            </a>
          </div>
          {/* Rest of the projects */}
          <div className="project">
            <a
              href="https://explorear.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="1.jpg"
                alt="Project 1"
              />
              <div className="project-overlay">
                <h3>Explore-Ar</h3>
                <p>
                •Explore-AR is a website Application where user can experience augumented reality on web without any app or software.

                </p>
                <div className="project-link">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </div>
            </a>
          </div>
          {/* Rest of the projects */}
          <div className="project">
            <a
              href="https://waseems-spotify.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="2.jpg"
                alt="Project 1"
              />
              <div className="project-overlay">
                <h3>spotify-Clone</h3>
                <p>
                 Spotify-Clone made using html css javascript
                </p>
                <div className="project-link">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </div>
            </a>
          </div>
          {/* Rest of the projects */}
          <div className="project">
            <a
              href="https://delightful-malabi-ae9df5.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="4.jpg"
                alt="Project 1"
              />
              <div className="project-overlay">
                <h3>Todo-List</h3>
                <p>
                 Todo list made using html css javascript
                </p>
                <div className="project-link">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </div>
            </a>
          </div>
          {/* Rest of the projects */}
          <div className="project">
            <a
              href="https://waseem-car.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="3.jpg"
                alt="Project 1"
              />
              <div className="project-overlay">
                <h3>Car Animiation</h3>
                <p>
                  Netflix clone made using React-js. Used tmdb api to fetch
                  images.
                </p>
                <div className="project-link">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </div>
            </a>
          </div>
          {/* Rest of the projects */}
          <div className="project">
            <a
              href="https://react-netflix-demo.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/341/654/datas/original.PNG"
                alt="Project 1"
              />
              <div className="project-overlay">
                <h3>Netflix-Clone</h3>
                <p>
                  Netflix clone made using React-js. Used tmdb api to fetch
                  images.
                </p>
                <div className="project-link">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </div>
            </a>
          </div>
          {/* Rest of the projects */}
        </div>
      </section>
    </div>
  );
}

export default Projects;
