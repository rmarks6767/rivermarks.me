import React, { useState } from 'react';
import Home from './Content/Home';
import Resume from './Resume';
import HollowTerminal from './Terminal/HollowTerminal';
import { Experiences } from './Experience';
import Projects from './Projects';
// import About from './Content/About';
// import Projects from './Content/Projects';

const App = () => {
  const [tab, setTab] = useState(0);
  const [tabs, setTabs] = useState([
    { key: 'home', label: 'Home' },
    { key: 'Experience', label: 'Experience' },
    { key: 'projects', label: 'Projects' },
    { key: 'resume', label: 'Resume' },
  ]);

  return (
    <HollowTerminal
      tab={tab}
      setTab={setTab}
      tabs={tabs}
    >
      {tab === 0 && <Home />}
      {tab === 1 && <Experiences />}
      {tab === 2 && <Projects />}
      {tab === 3 && <Resume />}
    </HollowTerminal>
  );
};

export default App;
