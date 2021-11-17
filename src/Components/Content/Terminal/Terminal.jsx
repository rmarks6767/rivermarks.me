import { Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import './Terminal.scss';

const KEYS_TO_IGNORE = [
  'Shift',
  'Alt',
  'CapsLock',
  'F1',
  'F2',
  'F3',
  'F4',
  'F5',
  'F6',
  'F7',
  'F8',
  'F9',
  'F10',
  'F11',
  'F12',
  'Control',
  'Escape',
  'ContextMenu',
  'Tab',
];

const DIRECTORIES = {
  '~': {
    Projects: {
      'project-loremaster': (
        <div>
          {' '}
          <img src="https://www.lcps.org/cms/lib/VA01000195/Centricity/Domain/29342/DnD%20logo.jpg" alt="Logo" />
          <p>Project Loremaster is a </p>
        </div>),
      'mc-data-api': {

      },
      'minecraft-charity-stream': {

      },
    },
    About: {},
  },

};

const Terminal = () => {
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [commands, setCommands] = useState([]);
  const [currentCommand, setCurrentCommand] = useState(-1);
  const [isFocused, setIsFocused] = useState(true);
  const [listenerSet, setListenerSet] = useState(false);

  // References needed to access all the data in the event listener
  const currentDirectoryRef = useRef(currentDirectory);
  const inputRef = useRef(input);
  const commandsRef = useRef(commands);
  const currentCommandRef = useRef(currentCommand);

  const userCommands = {
    cd: {
      possibleArgs: 1,
      helpText: 'cd: no such file or directory',
      successHandler: (dir) => {
        if (dir) {
          const newDir = `${currentDirectoryRef.current}/${dir}`;
          setCurrentDirectory(newDir);
          currentDirectoryRef.current = newDir;
        } else {
          setCurrentDirectory('~');
          currentDirectoryRef.current = '~';
        }
      },
    },
    clear: {
      possibleArgs: 0,
      helpText: 'No arguments allowed with clear',
      successHandler: () => {
        setOutput([]);
      },
    },
    ls: {
      possibleArgs: 0,
      helpText: 'No arguments allowed with ls',
      successHandler: () => {
        const [root, ...dirs] = currentDirectoryRef.current.split('/');
        let current = DIRECTORIES[root];

        dirs.forEach((dir) => {
          current = current[dir];
        });

        if (!React.isValidElement(current)) {
          setOutput((o) => [...o, Object.keys(current).join(' ')]);
        } else {
          setOutput((o) => [...o, current]);
        }
      },
    },
  };

  const processCommand = (c) => {
    const [command, ...args] = c.split(' ');

    if (userCommands[command]) {
      const { possibleArgs, helpText, successHandler } = userCommands[command];
      if (args.length > possibleArgs) setOutput((o) => [...o, helpText]);
      else successHandler(...args);
    } else setOutput((o) => [...o, `zsh: ${command}: command not found...`]);
  };

  useEffect(() => {
    const listener = (e) => {
      // Arrow keys get previous commands
      if (e.key === 'ArrowUp') {
        // Get previous command
        setCurrentCommand((c) => {
          if (c === -1) return c;

          return c - 1;
        });
      } else if (e.key === 'ArrowDown') {
        // Get next command
        setCurrentCommand((c) => {
          if (c === -1) return c;

          return c + 1;
        });
        setInput();
      } else if (e.key === 'Enter') {
        setCommands((c) => {
          const newCommands = [
            ...c,
            {
              directory: currentDirectoryRef.current,
              command: inputRef.current,
            },
          ];
          commandsRef.current = newCommands;

          return newCommands;
        });
        setOutput((o) => [
          ...o,
          `rivermarks.me:${currentDirectoryRef.current}$ ${inputRef.current}`,
        ]);
        processCommand(inputRef.current);
        setInput('');
        setCurrentCommand((c) => {
          const cc = c === -1 ? 0 : c + 1;
          currentCommandRef.current = cc;

          return cc;
        });
      } else if (e.key === 'Backspace') {
        setInput((i) => {
          const newInput = i.slice(0, i.length - 1);
          inputRef.current = newInput;

          return newInput;
        });
      } else if (KEYS_TO_IGNORE.includes(e.key)) {
        // ignore
      } else {
        setInput((i) => {
          const newInput = i + e.key;
          inputRef.current = newInput;

          return newInput;
        });
      }
    };

    if (isFocused) {
      if (!listenerSet) {
        document.addEventListener('keydown', listener);
        setListenerSet(true);
      }
    } else if (listenerSet) {
      document.removeEventListener('keydown', listener);
      setListenerSet(false);
    }
  }, [isFocused, input, listenerSet]);

  return (
    <div
      className="terminal"
      role="textbox"
      onFocus={() => setIsFocused(true)}
    >
      <div className="top-bar">
        <div className="dots">
          <div className="dot red" />
          <div className="dot yellow" />
          <div className="dot green" />
        </div>
      </div>
      <div className="content">
        {output.map((o) => (
          <Typography variant="h4">
            {o}
          </Typography>
        ))}
        <Typography variant="h4">
          rivermarks.me:
          {currentDirectory}
          $
          {' '}
          {input}
        </Typography>
      </div>
    </div>
  );
};

export default Terminal;
