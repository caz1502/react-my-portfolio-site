import React from "react";
import { Row, Container } from "react-bootstrap";
import teamProfile from "../assets/teamProfile.jpg";
import ems from "../assets/EMS1.jpg";
import Man_in_the_Kitchen from "../assets/man_in_the_kitchen.jpg";
import where_calendar from "../assets/calendar.jpg";
import dayMaker from "../assets/joke.jpg";

function Projects() {
  return (
    <div id="projects">
      <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px", }}>Projects</h1>
        <Row>
          <div
            classNameName="card-columns"
            style={{ width: "90%", marginLeft: "auto", marginRight: "auto", }}
          >
            <div
              className="card"
              style={{
                marginBottom: "50px",
                borderRadius: "50px",
                borderColor:"red !important"
              }}
            >
              <img
                src={teamProfile}
                alt="teamProfile"
                style={{
                  borderRadius: "50px",
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "40px",
                  marginBottom: "30px",
                  borderRadius: "50px",
                }}
              />
              <div className="card-body">
                <h2 className="card-title" style={{ textAlign: "center" }}>
                  Team Profile Creator
                </h2>
                <p className="card-text" style={{ textAlign: "center" }}>
                  This application generates an html Team Profile page, using
                  answers from questions via the VS command prompt, by executing
                  node app.js and auto generates the html web page
                </p>
                <a
                  href="https://www.youtube.com/watch?v=stgZ8oZj7vc"
                  target="blank"
                  style={{ fontSize: "30px" }}
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="https://github.com/caz1502/Team_Profile_Generator"
                  target="blank"
                  style={{ fontSize: "30px" }}
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

            <div
              className="card"
              style={{
                marginBottom: "50px",
                borderRadius: "50px",
              }}
            >
              <img
                src={ems}
                alt="ems"
                style={{
                  borderRadius: "50px",
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "40px",
                  marginBottom: "30px",
                 
                }}
              />
              <div className="card-body">
                <h2 className="card-title" style={{ textAlign: "center" }}>
                  Employee Management System
                </h2>
                <p className="card-text" style={{ textAlign: "center" }}>
                  A command-line application from scratch to manage a company's
                  employee database, using Node.js, Inquirer, and MySQL..
                </p>
                <a
                  href="https://www.youtube.com/watch?v=ZqpqcMF4ym0"
                  target="blank"
                  style={{ fontSize: "30px" }}
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="https://github.com/caz1502/Employee_Management_System"
                  target="blank"
                  style={{ fontSize: "30px" }}
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

            <div
              className="card"
              style={{
                marginBottom: "50px",
                borderRadius: "50px",
            
              }}
            >
              <img
                src={where_calendar}
                alt="calender"
                style={{
                  borderRadius: "50px",
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "40px",
                  marginBottom: "30px",
                  
                }}
              />
              <div className="card-body">
                <h3 className="card-title" style={{ textAlign: "center" }}>
                  Where's the Party At?!
                </h3>
                <p className="card-text" style={{ textAlign: "center" }}>
                  Uni group project. An app to create and find events to attend.
                </p>
                <a
                  href="https://wheres-the-party-at.herokuapp.com/login"
                  target="blank"
                  style={{ fontSize: "30px" }}
                >
                  <i className="fas fa-link"></i>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=ZqpqcMF4ym0"
                  target="blank"
                  style={{ fontSize: "30px" }}
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

            <div
              className="card"
              style={{
                marginBottom: "50px",
                borderRadius: "50px",
              }}
            >
              <img
                src={dayMaker}
                alt="dayMaker"
                style={{
                  borderRadius: "50px",
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "40px",
                  marginBottom: "30px",
                }}
              />
              <div className="card-body">
                <h2 className="card-title" style={{ textAlign: "center" }}>
                  Day Maker
                </h2>
                <p className="card-text" style={{ textAlign: "center" }}>
                  Uni group project. Check the weather, the news or have a laugh
                  reading a joke. UIKit framework making resting API fetch
                  requests.
                </p>
                <a
                  href="https://caz1502.github.io/Magpies-Project-1/"
                  target="blank"
                  style={{ fontSize: "30px" }}
                >
                  <i className="fas fa-link"></i>
                </a>
                <a
                  href="https://github.com/caz1502/Magpies-Project-1"
                  target="blank"
                  style={{ fontSize: "30px" }}
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

            <div
              className="card"
              style={{
                marginBottom: "50px",
                borderRadius: "50px",
              }}
            >
              <img
                src={Man_in_the_Kitchen}
                alt="Man_in_the_Kitchen"
                style={{
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "40px",
                  marginBottom: "30px",
                  borderRadius: "50px",
                }}
              />
              <div className="card-body">
                <h2 className="card-title" style={{ textAlign: "center" }}>
                  Man in the Kitchen
                </h2>
                <p className="card-text" style={{ textAlign: "center" }}>
                  Designed for a client, letting me practice my web design
                  skills thats show cases his kitchen and shop fitting business
                </p>
                <a
                  href="https://caz1502.github.io/Man_in_the_Kitchen/"
                  target="blank"
                  style={{ fontSize: "30px" }}
                >
                  <i className="fas fa-link"></i>
                </a>
                <a
                  href="https://github.com/caz1502/Man_in_the_Kitchen"
                  target="blank"
                  style={{ fontSize: "30px" }}
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
