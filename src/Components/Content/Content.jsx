import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Terminal from './Terminal';

const Content = ({ terminalMode }) => (
  <>
    {terminalMode && <Terminal /> }
    <Router>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="terminal" element={<Terminal />} />
        <Route exact path="/" element={!terminalMode ? <Home /> : <div />} />
      </Routes>
    </Router>
  </>
);

Content.propTypes = {
  terminalMode: PropTypes.bool.isRequired,
};

export default Content;
