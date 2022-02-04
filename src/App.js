import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./css/app.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        
        <Navigation />
        <h4>Find out about me ...</h4>
      <Route path="/Header" component={Header} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Contact" component={Contact} />
      <Footer></Footer>
      </Router>
      </div>
  );
}

export default App;




