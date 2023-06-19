import React from "react";
import Fade from 'react-reveal/Fade'
import "./About.css";

function About() {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="about-img-container">
        <img src="dp-2.jpg" alt="Profile Picture" className="about-img" />
      </div>
      <div className="about-text">
        <Fade left>
        <p>
         
Hello! My name is Mohammed Waseem.

 I have a strong background in Computer Science and graduated in the year 2024.

My goal is to pursue a career that enables me to express my creativity by designing exceptional software and creating immersive user experiences. I have a genuine passion for technology and find great joy in utilizing it to solve practical problems.

In my leisure time, I indulge in various activities. I particularly enjoy playing table tennis, exploring different video games, and staying active through swimming.
        </p>
        </Fade>
      </div>
    </div>
  );
}

export default About;
