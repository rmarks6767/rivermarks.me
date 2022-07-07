import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import TerminalContainer from './Terminal/TerminalContainer';
import { Terminal } from './Terminal';
import { Experiences } from './Experience';
import Projects from './Projects';
import useQuery from '../../util/useQuery';

const Content = () => {
  const query = useQuery();
  const navigate = useNavigate();

  const [textAreaRef, setTextAreaRef] = useState();
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const [tab, setTab] = useState(query.get('tab') || 'Home');
  const [tabs, setTabs] = useState([
    { label: 'Home', Component: Home },
    { label: 'Experience', Component: Experiences },
    { label: 'Projects', Component: Projects },
    { label: 'Terminal', Component: Terminal },
  ]);

  // Used to update path so page stays up to date
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
