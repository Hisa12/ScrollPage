import React from "react";
import "../Styles/Home.css";
import FirstPage from "./FirstPage";
import Contact from "./Contact";
import Project from "./Project";
import MySkills from "./MySkills";
import AboutMe from "./AboutMe";
import Resume from "./Resume";

function Home() {
  return (
    <div className="background">
      <div className="container">
        <FirstPage />
      </div>
      <div className="outline">
        <div className="firstContainer">
          <AboutMe />
        </div>
        <div className="secondContainer">
          <MySkills />
        </div>
        <div className="thirdContainer">
          <Resume />
        </div>
        <div className="fourthContainer">
          <Project />
        </div>
      </div>
      <div className="contactContainer">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
