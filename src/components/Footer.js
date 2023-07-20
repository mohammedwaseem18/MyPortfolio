import React from "react";
import { Link, animateScroll as scroll } from "react-scroll"; // Import necessary components from react-scroll
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000, // Adjust the duration to control the scrolling speed
      smooth: true, // Enable smooth scrolling
    });
  };
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.instagram.com/waseem_mohd2831/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
            alt="Instagram"
          />
        </a>
        <a href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
            alt="Facebook"
          />
        </a>
        <a href="https://www.linkedin.com/in/mohammed-waseem-20a752207">
          <img
            src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/mohammedwaseem18">
          <img
            src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
            alt="GitHub"
          />
        </a>
        <a href="https://twitter.com/YourTwitterHandle">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
  </a>
      </div>
      <div className="rocket-section">
        <div className="rocket-wrapper">
          <Link
            to="top"
            smooth={true} // Enable smooth scrolling when clicking the rocket
            duration={1000} // Adjust the duration to control the scrolling speed
            onClick={scrollToTop} // Call the scrollToTop function on click
          >
            <img
              className="rocket"
              src="https://iheartcraftythings.com/wp-content/uploads/2021/05/How-to-Draw-Rocket-%E2%80%93-Featured-Image.jpg"
              alt="Rocket"
            />
          </Link>
          <div className="rocket-text">Beam up, Scotty!</div>
        </div>
      </div>
      <div className="copyright-info">
        <p>&#169; All credit goes to Mohammed Waseem - Copyright 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
