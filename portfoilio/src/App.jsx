import { useState } from "react";

//import './App.css'
import Header from "./components/01header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Home from "./components/Home/home.jsx";
import About from "./components/about/about.jsx";
import Projects from "./components/projects/project.jsx";
import Skills from "./components/skills/skills.jsx";
import Contact from './components/contact/contact.jsx'
import RubiksCube from "./components/threejs/animation.jsx";

function App() {
  return (
    <>
    {/* <RubiksCube /> */}
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
