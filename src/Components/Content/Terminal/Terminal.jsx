/* eslint-disable react/jsx-one-expression-per-line */
import { Typography } from '@mui/material';
import React, {
  createRef, useEffect, useRef, useState,
} from 'react';
import Loremaster from '../Projects/Loremaster/Loremaster';
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
  'Escape',
  'ContextMenu',
];

const DIRECTORIES = {
  '~': {
    Projects: {
      loremaster: <Loremaster />,
    },
    Experience: {},
    About: {},
  },

};

const Terminal = () => {
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    <div>
      &nbsp;&nbsp;&nbsp;Welcome! If you have no idea what is going on with this box, press
      the toggle in the upper right corner. Otherwise, type help to see a list of commands!
      <hr />
    </div>,
  ]);
  const [commands, setCommands] = useState([]);
  const [currentCommand, setCurrentCommand] = useState(-1);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [isFocused, setIsFocused] = useState(true);
  const [listenerSet, setListenerSet] = useState(false);
  const [controlPressed, setControlPressed] = useState(false);

  // References needed to access all the data in the event listener
  const bottomRef = createRef();
  const currentDirectoryRef = useRef(currentDirectory);
  const inputRef = useRef(input);
  const commandsRef = useRef(commands);
  const currentCommandRef = useRef(currentCommand);
  const controlPressedRef = useRef(controlPressed);
  const cursorPositionRef = useRef(cursorPosition);

  const userCommands = {
    cd: {
      possibleArgs: 1,
      helpText: 'cd: no such file or directory',
      successHandler: (dir) => {
        if (dir) {
          // Handle moving up directories
          if (dir === '..' || dir === '.') {
            if (dir === '.' || currentDirectoryRef.current === '~') return;

            const dirs = `${currentDirectoryRef.current}/${dir}`.split('/');
            const newDir = dirs.splice(0, dirs.length - 2).join('/');

            setCurrentDirectory(newDir);
            currentDirectoryRef.current = newDir;

            return;
          }

          // Handle moving into directories (and making sure they exist)
          const [root, ...dirs] = `${currentDirectoryRef.current}/${dir}`.split('/');
          let currentDir = DIRECTORIES[root];
          let dirDNE = false;

          dirs.forEach((d) => {
            if (!dirDNE) {
              if (!currentDir || !currentDir[d]) {
                dirDNE = true;
                currentDir = d;
              } else currentDir = currentDir[d];
            }
          });

          if (dirDNE) {
            setOutput((o) => [...o, `${userCommands.cd.helpText}: ${currentDir}`]);
          } else {
            const newDir = `${currentDirectoryRef.current}/${dir}`;
            setCurrentDirectory(newDir);
            currentDirectoryRef.current = newDir;
          }
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
          // If each of the children of the current dir are react elements, we show them
          let isReact = false;
          const out = Object.keys(current).map((key) => {
            if (React.isValidElement(current[key])) {
              isReact = true;
              return current[key];
            }
            return key;
          });

          setOutput((o) => [...o, (
            <div>
              {isReact
                ? <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>{out}</div>
                : out.join(' ')}
            </div>)]);
        } else {
          setOutput((o) => [...o, <div>{current}</div>]);
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
    const keyDownListener = (e) => {
      if (e.key === ' ' || e.key === 'Tab') {
        e.preventDefault();
      }

      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        // TODO: Make this work, need to write it out
        // const diff = e.key === 'ArrowUp' ? -1 : 1;
        // const ccr = currentCommandRef.current;
        // const cr = commandsRef.current;

        // setCurrentCommand((c) => {
        //   if (ccr + diff >= 0 && ccr + diff < cr.length) {
        //     currentCommandRef.current = c + diff;

        //     return c + diff;
        //   }
        //   return c;
        // });
        // setInput((i) => {
        //   if (ccr + diff === cr.length) {
        //     inputRef.current = '';
        //     return '';
        //   } if (ccr > 0) {
        //     const { command: newInput } = cr[ccr + diff];
        //     inputRef.current = newInput;

        //     return newInput;
        //   }
        //   return i;
        // });
      } else if (e.key === 'ArrowLeft') {
        setCursorPosition((c) => {
          if (-c < inputRef.current.length) {
            cursorPositionRef.current = c - 1;
            return c - 1;
          }
          return c;
        });
      } else if (e.key === 'ArrowRight') {
        setCursorPosition((c) => {
          if (-c > 0) {
            cursorPositionRef.current = c + 1;
            return c + 1;
          }
          return c;
        });
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
      } else if (e.key === 'Control') {
        controlPressedRef.current = true;
        setControlPressed(true);
      } else if (e.key === 'Tab') {
        // TODO: allow tab complete
      } else if (KEYS_TO_IGNORE.includes(e.key)) {
        // ignore
      } else if (controlPressedRef.current) {
        // ignore
      } else {
        setInput((i) => {
          const cp = cursorPositionRef.current;

          console.log(cp);

          console.log(`Front half: ${[...i].slice(-cp, inputRef.current.length).join('')}`);
          console.log(`Back half: ${[...i].slice(0, -cp).join('')}`);

          const newInput = `${[...i].slice(-cp, inputRef.current.length).join('')}${e.key}${[...i].slice(0, -cp).join('')}`;
          inputRef.current = newInput;

          return newInput;
        });
      }
    };

    const keyUpListener = (e) => {
      if (e.key === 'Control') {
        controlPressedRef.current = false;
        setControlPressed(false);
      }
    };

    const pasteListener = (e) => {
      setInput((i) => {
        const newInput = i + e.clipboardData.getData('Text');
        inputRef.current = newInput;

        return newInput;
      });
    };

    if (isFocused) {
      if (!listenerSet) {
        document.addEventListener('keydown', keyDownListener);
        document.addEventListener('keyup', keyUpListener);
        document.addEventListener('paste', pasteListener);
        setListenerSet(true);
      }
    } else if (listenerSet) {
      document.removeEventListener('keydown', keyDownListener);
      document.removeEventListener('keyup', keyUpListener);
      document.removeEventListener('paste', pasteListener);
      setListenerSet(false);
    }

    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [
    currentDirectory,
    commands,
    currentCommand,
    isFocused,
    controlPressed,
    input,
    output,
    listenerSet,
  ]);

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
        {output.map((o, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Typography key={i} variant="h4">
            {o}
          </Typography>
        ))}
        <div ref={bottomRef} style={{ display: 'flex' }}>
          <Typography variant="h4">
            rivermarks.me:
            {currentDirectory}
            $
            {' '}
            {input}
          </Typography>
          <div style={{ marginLeft: `${8.5 * cursorPosition}px` }} className="cursor" />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
