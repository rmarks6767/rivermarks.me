import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Content from './Content';
import '../sass/app.scss';
import Roogle from './Content/Roogle';

const App = () => {
  useEffect(() => {
    const resize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/roogle" element={<Roogle />} />
      </Routes>
    </Router>
  );
};

export default App;
