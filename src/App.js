import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {

  const [currentTab, setCurrentTab] = useState("header");

  const renderTab = () => {
    switch (currentTab) {
        case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navigation>

      </Navigation>
      <div>
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      </div>
      <div>
        <main>{renderTab()}</main>
      </div>
      <div>
        <Footer>
          
        </Footer>
      </div>
    </div>
  );

}

export default App;
