import React from "react";
import projects from "../project.json";
import { Button, Card, CardColumns, Col, Container, Row } from 'react-bootstrap';
import './style.css';



export default function Project(props) {
  return (

    <section id="projects">
      <h2 className="top-title">Projects</h2>
      <Container>

        <div class="card-parent">
          {/* <Col md={3}> */}
          {projects.map((project) => (
            // <CardColumns xs={5} md={2} className="m-6 project-card">
            // <div className="m-6 project-card">
            <div className="project-card">
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  {project.subtitle}
                </Card.Text>

                <Button variant="dark btn-md col-xs-4 m-4 " href={project.link}>Visit Site</Button>
                <Button variant="dark btn-md col-xs-4 " href={project.github}>Github</Button>
              </Card.Body>
            </div>




          ))}
          {/* </Col> */}
        </div>
      </Container>
    </section>
  );
}