import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Element } from 'react-scroll';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';  // Update path to be within src/

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Element name="home">
            <Home />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element name="skills">
            <Skills />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
        </div>
      </div>
    </Router>
  );
}

export default App;
