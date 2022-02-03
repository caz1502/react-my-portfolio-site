import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import resume from "../assets/Resume.pdf";

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
              <Nav.Link href="#about-me" style={{ fontSize: "25px" }}>
                About_Me
              </Nav.Link>
              <Nav.Link href="#projects" style={{ fontSize: "25px" }}>
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" style={{ fontSize: "25px" }}>
                Contact
              </Nav.Link>
              <Nav.Link
                href={resume}
                download="Resume.pdf"
                style={{ fontSize: "25px" }}
              >
                Resume{" "}
              </Nav.Link>

              <Nav.Link
                href="https://github.com/caz1502"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "25px" }}
              >
                {" "}
                GitHub
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/carol-shiers-001420b6/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "25px" }}
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
