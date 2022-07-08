import { Typography } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputLine from './InputLine/InputLine';
import commands from '../../../data/commands';
import './Terminal.scss';

const Terminal = ({
  setCurrentDirectory,
  currentDirectory,
  setTextAreaRef,
}) => {
  const [output, setOutput] = useState([]);

  const processCommand = (commandStr, commandClear) => {
    const [command, ...args] = commandStr.split(' ');

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
          help,
        ]);
      }
    } else {
      commands.default.successHandler(event);
    }

    commandClear();
  };

  return (
    <>
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
          setTextAreaRef={setTextAreaRef}
          leadingText={currentDirectory}
          setOutput={setOutput}
          processCommand={processCommand}
        />
      </div>
    </>
  );
};

Terminal.propTypes = {
  setCurrentDirectory: PropTypes.func.isRequired,
  currentDirectory: PropTypes.string.isRequired,
  setTextAreaRef: PropTypes.func.isRequired,
};

export default Terminal;
