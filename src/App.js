import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navigation></Navigation>
        <div>
          <Header></Header>
        </div>
    
        <div>
          <Footer></Footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
