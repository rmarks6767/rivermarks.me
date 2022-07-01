import { Typography } from '@mui/material';
import React, { useState, createRef } from 'react';
import commands from './data/commands';
import InputLine from './InputLine/InputLine';
import './Terminal.scss';

const Terminal = () => {
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const [value, setValue] = useState('');
  const [output, setOutput] = useState([]);
  const textAreaRef = createRef();

  const focusTextArea = () => {
    const end = value.length + currentDirectory.length + 1;
    textAreaRef.current.setSelectionRange(end, end);
    textAreaRef.current.focus();
  };

  const processCommand = () => {
    const [command, ...args] = value.split(' ');

    const event = {
      args,
      command,
      currentDirectory,
      setOutput,
      setCurrentDirectory,
    };

    if (commands[command]) {
      const {
        possibleArgs,
        help,
        successHandler,
      } = commands[command];

      if (possibleArgs === -1 || possibleArgs >= args.length) {
        successHandler(event);
      } else {
        setOutput([
          ...output,
          {
            text: help,
            key: Date.now(),
          }]);
      }
    } else {
      commands.default.successHandler(event);
    }

    setValue('');
  };

  return (
    <div
      role="textbox"
      className="terminal-container"
      onClick={focusTextArea}
      onKeyDown={focusTextArea}
      tabIndex={0}
    >
      <div className="terminal">
        <div className="top-bar">
          <div className="dots">
            <div className="dot red" />
            <div className="dot yellow" />
            <div className="dot green" />
          </div>
        </div>
        <div className="content">
          {output.map((out, i) => (
            <Typography
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              style={{ padding: '0px', fontSize: '2rem' }}
              variant="h4"
            >
              {out}
            </Typography>
          ))}
          <div style={{ display: 'flex' }}>
            <InputLine
              leadingText={currentDirectory}
              textAreaRef={textAreaRef}
              value={value}
              setValue={setValue}
              setOutput={setOutput}
              processCommand={processCommand}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
