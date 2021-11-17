import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import About from './about';
import Home from './home';
import Projects from './projects';
import Terminal from './terminal/terminal';

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
