import React, { useState } from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { MiniTerminal, Terminal } from './Content/Terminal';
import Home from './Content/Home';
import Resume from './Content/Resume';
// import About from './Content/About';
// import Projects from './Content/Projects';

const App = () => {
  const [terminalMode, setTerminalMode] = useState(true);

  return (
    <>
      <MiniTerminal isActive={terminalMode} setIsActive={setTerminalMode} />
      <Router>
        <Routes>
          {/* <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} /> */}
          <Route path="resume" element={<Resume />} />
          <Route exact path="/" element={terminalMode ? <Terminal /> : <Home />} />
          {/* <Route exact path="/" element={<Home />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
