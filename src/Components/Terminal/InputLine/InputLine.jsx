import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './InputLine.scss';

const InputLine = ({
  leadingText,
  setOutput,
  processCommand,
  setTextAreaRef,
}) => {
  const [value, setValue] = useState('');

  return (
    <textarea
      ref={setTextAreaRef}
      className="InputLine"
      value={`${leadingText} ${value}`}
      wrap="soft"
      autoCorrect="off"
      autoComplete="off"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          setOutput((output) => [...output, `${leadingText} ${value}`]);
          processCommand(value, () => setValue(''));
        }
      }}
      onChange={(e) => {
        setValue(e.target.value.slice(leadingText.length + 1));
      }}
    />
  );
};

InputLine.propTypes = {
  leadingText: PropTypes.string.isRequired,
  setOutput: PropTypes.func.isRequired,
  processCommand: PropTypes.func.isRequired,
  setTextAreaRef: PropTypes.func.isRequired,
};

export default InputLine;
