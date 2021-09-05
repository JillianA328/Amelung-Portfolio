import React from "react";
import img2 from '../../images/selfie.jpg'
import './style.css';

export default function About() {
  return (
    <section class="container">
      <h2 className="top-title">About Me</h2>
      <hr></hr>

      <div class="d-flex p-3 bd-highlight">

        <img src={img2} class="image" alt="selfie"></img>


        <p className="bio mb-8 leading-relaxed">
          Junior Full Stack Developer currently living in Florida.  I graduated from the Rutgers Coding Bootcamp in September 2021. I graduated from the Rutgers Coding Bootcamp in September 2021.
          Skills learned in bootcamp are: HTML, CSS, JavaScript, MongoDB, Insomnia, MySQL, NoSQL, React, Progressive Web Applications, MERN, MVC, ORM, Express, OOP, Node.js,
          Server-side APIs, Third-Party APIs, Web APIs, etc.
        </p>

      </div>
    </section>
  );
}