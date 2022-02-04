import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import headshot from "../assets/Profile161x161.jpg";


function Header() {
  return (
    <div id="about-me">
    
      <Container style={{ marginTop: "100px", marginBottom: "200px" }}>
        <Row>
          <Col>
            <img
              src={headshot}
              alt="place-holder"
              style={{ width: "500px", borderRadius: "50px" }}
            />
          </Col>

          <Col style={{ marginTop: "125px" }}>
            <h4>About Me</h4>I am a Business Analyst based in Brisbane,
            Queensland, currently studying Fullstack Development through UniSA.
            I have a passion for innovation, data and empowering people through
            knowledge, `Scientia potentia est` Over the last 2 years, I have
            been transitioning from my Procurement specialty as a Buyer to
            Business Intelligence in the direction of Data Science and Full
            Stack Development"
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
