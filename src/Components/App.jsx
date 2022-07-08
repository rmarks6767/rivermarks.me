import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Content from './Content';

const App = () => {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [window.innerHeight]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/resume.pdf" onEnter={() => window.location.reload()} />
      </Routes>
    </Router>
  );
};

export default App;
