import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Terminal from './Terminal';

const Content = () => (
  <Router>
    <Routes>
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="terminal" element={<Terminal />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default Content;
