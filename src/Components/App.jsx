import React, {
  createRef, useState, useEffect, useRef,
} from 'react';
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
  const [shrinkTerm, setShrinkTerm] = useState(null);
  const [expandTerm, setExpandTerm] = useState(null);
  const [termH, setTermH] = useState(1000);
  const [termW, setTermW] = useState(1000);
  const [ogSize, setOgSize] = useState();
  const termHRef = useRef(termH);
  const termWRef = useRef(termW);

  const terminalRef = createRef();

  useEffect(() => {
    if (shrinkTerm) {
      if (`${termW}px` !== terminalRef.current.style.width) {
        terminalRef.current.style.width = `${termW}px`;
      }
      if (`${termH}px` !== terminalRef.current.style.height) {
        terminalRef.current.style.height = `${termH}px`;
      }

      if (termW <= 0 && termH <= 0) {
        terminalRef.current.style.display = 'none';
        clearInterval(shrinkTerm);
        setShrinkTerm(null);
      }

      return () => {};
    }

    if (expandTerm) {
      if (`${termW}px` !== terminalRef.current.style.width) {
        if (termW > ogSize.width) terminalRef.current.style.width = `${ogSize.width}px`;
        else terminalRef.current.style.width = `${termW}px`;
      }
      if (`${termH}px` !== terminalRef.current.style.height) {
        if (termH > ogSize.height) terminalRef.current.style.height = `${ogSize.height - 15}px`;
        else terminalRef.current.style.height = `${termH}px`;
      }

      if (termW >= ogSize.width && termH >= ogSize.height) {
        terminalRef.current.style.width = '99.5%';
        terminalRef.current.style.height = '100%';
        terminalRef.current.style.position = 'inherit';
        terminalRef.current.style.bottom = null;
        terminalRef.current.style.right = null;
        clearInterval(expandTerm);
        setExpandTerm(null);
      }

      return () => {};
    }

    if (!ogSize) {
      setOgSize({
        height: terminalRef.current.clientHeight,
        width: terminalRef.current.clientWidth,
      });
      setTermH(terminalRef.current.clientHeight);
      setTermW(terminalRef.current.clientWidth);
    }

    return () => {};
  }, [terminalRef, shrinkTerm, expandTerm, termW, termH, ogSize]);

  const shrinkTerminal = () => {
    terminalRef.current.style.position = 'fixed';
    terminalRef.current.style.bottom = '10px';
    terminalRef.current.style.right = '10px';
    setShrinkTerm(setInterval(() => {
      termHRef.current -= 20;
      termWRef.current -= 20;
      setTermW(termHRef.current - 100);
      setTermH(termWRef.current - 50);
    }, 10));
  };

  const expandTerminal = () => {
    terminalRef.current.style.display = 'block';
    setExpandTerm(setInterval(() => {
      termHRef.current += 20;
      termWRef.current += 20;
      setTermW(termHRef.current + 100);
      setTermH(termWRef.current + 50);
    }, 10));
  };

  return (
    <>
      <MiniTerminal
        isActive={terminalMode}
        setIsActive={() => {
          setTerminalMode(!terminalMode);
          if (!terminalMode) expandTerminal();
          if (terminalMode) shrinkTerminal();
        }}
      />
      <Router>
        <Routes>
          {/* <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} /> */}
          <Route path="resume" element={<Resume />} />
          <Route exact path="/" element={<Terminal ref={terminalRef} />} />
          {/* <Route exact path="/" element={<Home />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
