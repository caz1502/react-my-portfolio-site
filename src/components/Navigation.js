import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import resume from "../assets/Resume.pdf";

function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link
                href="/Header"
                rel="noopener noreferrer"
                style={{ fontSize: "25px" }}
              >
                About Me
              </Nav.Link>

              <Nav.Link
                href="/Projects"
                rel="noopener noreferrer"
                style={{ fontSize: "25px" }}
              >
                Portfolio
              </Nav.Link>

              <Nav.Link
                href="/Contact"
                rel="noopener noreferrer"
                style={{ fontSize: "25px" }}
              >
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
