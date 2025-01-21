import { useState } from "react";

//import './App.css'
import Header from "./components/01header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Home from "./components/Home/home.jsx";
import About from "./components/about/about.jsx";
import Projects from "./components/projects/project.jsx";
import Skills from "./components/skills/skills.jsx";
import Contact from './components/contact/contact.jsx'

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
