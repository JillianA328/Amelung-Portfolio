import React from "react";
import projects from "../project.json";
import { Button, Card, Row, CardGroup } from 'react-bootstrap';
import './style.css';



export default function Project(props) {
  return (
    <section id="projects">
      <h2 className="top-title">Portfolio</h2>
      <div>
        <div class="d-flex justify-content-between">
          {projects.map((project) => (
            <Row xs={5} md={2} className="g-6">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>
                    {project.subtitle}
                  </Card.Text>

                  <Button variant="light btn-sm col-xs-4 " href={project.link}>Visit Site</Button>
                  <Button variant="light btn-sm col-xs-4 " href={project.github}>Github</Button>
                </Card.Body>
              </Card>
            </Row>

          ))}
        </div>
      </div>
    </section>
  );
}