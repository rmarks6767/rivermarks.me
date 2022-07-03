import React, { useEffect, useState } from 'react';
import Home from './Content/Home';
import Resume from './Resume';
import TerminalContainer from './Terminal/TerminalContainer';
import { Experiences } from './Experience';
import Projects from './Projects';
import Terminal from './Terminal/Terminal';

const App = () => {
  const [textAreaRef, setTextAreaRef] = useState();
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const [tab, setTab] = useState('Home');
  const [tabs, setTabs] = useState([
    { label: 'Home', Component: Home },
    { label: 'Experience', Component: Experiences },
    { label: 'Projects', Component: Projects },
    { label: 'Resume', Component: Resume },
    { label: 'Terminal', Component: Terminal },
  ]);

  useEffect(() => {
    if (textAreaRef) {
      const autoResize = () => {
        textAreaRef.style.height = 'auto';
        textAreaRef.style.height = `${textAreaRef.scrollHeight}px`;
      };

      textAreaRef.addEventListener('input', autoResize);

      return () => {
        textAreaRef.removeEventListener('input', autoResize);
      };
    }

    return () => {};
  }, [textAreaRef]);

  return (
    <TerminalContainer
      isInput={tab === 'Terminal'}
      tab={tab}
      setTab={setTab}
      tabs={tabs}
      focusTextArea={async () => {
        if (textAreaRef) {
          const end = textAreaRef.value.length + currentDirectory.length + 1;
          textAreaRef.setSelectionRange(end, end);
          textAreaRef.focus();
        }
      }}
    >
      {tabs.map(({ label, Component }) => (
        tab === label && (
          <Component
            key={label}
            currentDirectory={currentDirectory}
            setCurrentDirectory={setCurrentDirectory}
            setTextAreaRef={setTextAreaRef}
          />
        )
      ))}
    </TerminalContainer>
  );
};

export default App;
