import React from "react";
import './style.css';
import { Navbar, Nav, Container } from 'react-bootstrap';



export default function Navigation(props) {
  return (

    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <h1>Jillian Amelung</h1>
          <Nav className="ml-auto">
            <Nav.Link class="nav-link" href="#About" onClick={() => { props.setCurrentPage("About") }}>About </Nav.Link>
            <Nav.Link class="nav-link" href="#Projects" onClick={() => { props.setCurrentPage("Projects") }}>Projects </Nav.Link>
            <Nav.Link class="nav-link" href="#Contact" onClick={() => { props.setCurrentPage("Contact") }}>Contact</Nav.Link>
            <Nav.Link class="nav-link" href="#Resume" onClick={() => { props.setCurrentPage("Resume") }}>Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>

  );
}
