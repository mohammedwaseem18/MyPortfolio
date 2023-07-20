import React from "react";
import Fade from "react-reveal/Fade";
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
            I am Waseem, an ambitious undergraduate student majoring in Computer
            Science and Engineering at BV Raju Institute of Technology. My
            primary focus lies in the realm of web development, where I exhibit
            proficiency in HTML, CSS, JavaScript, ReactJS, NodeJS, and SQL.
            Additionally, I possess an insatiable curiosity for exploring new
            destinations and an ardent fascination for automobiles. Driven by a
            relentless pursuit of excellence, I actively seek opportunities to
            enhance my skill set and stay at the forefront of the rapidly
            evolving industry. With an unwavering dedication to personal and
            professional growth, I aim to contribute meaningfully in the dynamic
            landscape of web development.
          </p>
        </Fade>
      </div>
    </div>
   
  );
}

export default About;
