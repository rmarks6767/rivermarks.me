import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import TerminalContainer from './Terminal/TerminalContainer';
import { Experiences } from './Experience';
import Projects from './Projects';
import useQuery from '../../util/useQuery';
// import Hiking from './Hiking';

const Content = () => {
  const navigate = useNavigate();
  const query = useQuery();

  const [textAreaRef, setTextAreaRef] = useState();
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const [tab, setTab] = useState(query.get('tab') || 'Home');
  const [tabs, setTabs] = useState([
    { Component: Home, label: 'Home', closable: false },
    { Component: Experiences, label: 'Experience', closable: false },
    { Component: Projects, label: 'Projects', closable: false },
    // { Component: Hiking, label: 'Hiking', closable: true },
  ]);

  useEffect(() => navigate(`?tab=${tab}`), [tab]);
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
      tabs={tabs}
      setTab={setTab}
      setTabs={setTabs}
      focusTextArea={() => {
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
            setTab={setTab}
            setTabs={setTabs}
          />
        )
      ))}
    </TerminalContainer>
  );
};

export default Content;
