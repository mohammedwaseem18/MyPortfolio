import React from 'react';
import emailjs from 'emailjs-com';
import './GetTouch.css';

function GetTouch() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i5p00ke', 'template_nb94q60', e.target, '9d1TU8fhrg1HlbhOit-D-')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.error(error);
      });

    e.target.reset();
  };

  return (
    <div>
      <section className="contact">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <ul>
            <li>
              <i className="fa fa-map-marker" /> Hyderabad|Telangana
            </li>
            <li>
              <i className="fa fa-phone" /> 8712351094
            </li>
            <li>
              <i className="fa fa-envelope" /> Mohammed Waseem uddin
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <h3>Get in Touch</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" />
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required defaultValue={""} />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="arrow">
          <img
            src="https://www.seekpng.com/png/small/432-4321277_arrow-thin-left-arrow-pointing-to-the-side.png"
            alt="arrow"
          />
        </div>
      </section>
    </div>
  );
}

export default GetTouch;


