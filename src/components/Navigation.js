import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

// import "../styles/Footer.css";
// We use JSX curly braces to evaluate the style object on the JSX tag

function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about-me">About Me</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#Resume">Download Resume</Nav.Link>
              <Nav.Link
                href="https://github.com/caz1502"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/carol-shiers-001420b6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                LinkedIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
