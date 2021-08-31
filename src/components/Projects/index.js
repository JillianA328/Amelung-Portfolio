import React from "react";
import projects from "../../project.json";

export const projects = [
    {
        "id": 1,
        "name": "Florida Springs",
        "image": "../../images/florida",
        "github": "https://github.com/JillianA328/floridasprings"
    },

    {
        "id": 2,
        "name": "Florida Springs",
        "image": "../../images/florida",
        "github": "https://github.com/JillianA328/floridasprings"
    },
];

export default function Project () {
  return (
    <section id="projects">
    <div>
      <div>
        {projects.map((project) => (
          <a
            href={project.link}
            key={project.id}
            >
            <div>
              <img
                alt="project-images"
    
                src={project.image}
              />
              <div>
                <h2>
                  {project.subtitle}
                </h2>
                <h1>
                  {project.title}
                </h1>
                <p>{project.github}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
  );
}
