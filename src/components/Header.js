import React from "react";
import { Container, Col, Row } from "react-bootstrap";

// import "../styles/Footer.css";

// We use JSX curly braces to evaluate the style object on the JSX tag

function Header() {
  return (
    <div id="about-me">
      <Container>
        <Row>
          <Col sm={8}>sm=4 add pic here</Col>
          <Col sm={4}>
            Business Analyst based in Brisbane, Queensland, currently studying
            Fullstack Development through UniSA. I have a passion for
            innovation, data and empowering people through knowledge, `Scientia
            potentia est` Over the last 2 years, I have been transitioning from
            my Procurement specialty as a Buyer to Business Intelligence in the
            direction of Data Science and Full Stack Development"
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
