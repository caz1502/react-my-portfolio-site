import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
