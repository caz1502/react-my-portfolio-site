import React from "react";
import { Row, Container, Col} from "react-bootstrap";

// import "../styles/Footer.css";

// We use JSX curly braces to evaluate the style object on the JSX tag

function Projects() {
  return (
    <div id="projects">
      <Container>
        <Row>
          <Col sm={8}>sm=4 add pic here</Col>
          <Col sm={4}>sm=8 add about me here</Col>
        </Row>
      </Container>
    </div>
  );
}
 


export default Projects;
