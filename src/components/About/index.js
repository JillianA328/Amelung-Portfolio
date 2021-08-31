import React from "react";
import img2 from '../../images/selfie.jpg'

export default function About() {
  return (
    <section id="About">
      
      <div class="d-flex p-3 bd-highlight">
    
          <img src={img2} class="image" alt="selfie"></img>
          

          <p className="bio mb-8 leading-relaxed">
          Junior Full Stack Developer currently living in sunny Florida.  I went throught the Rutgers Coding 
          Bootcamp from April 2021 - September 2021.  Skills learned in bootcamp are: HTML, CSS, JavaScript, 
          MongoDB, Insomnia, MySQL, NoSQL. Junior Full Stack Developer currently living in sunny Florida.  I went throught the Rutgers Coding 
          Bootcamp from April 2021 - September 2021.  Skills learned in bootcamp are: HTML, CSS, JavaScript, 
          MongoDB, Insomnia, MySQL, NoSQL.
          </p>
      </div>
    </section>
  );
}