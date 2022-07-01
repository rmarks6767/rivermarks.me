import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './InputLine.scss';

const InputLine = ({
  textAreaRef,
  leadingText,
  value,
  setValue,
  setOutput,
  processCommand,
}) => {
  useEffect(() => {
    const { current } = textAreaRef;

    if (current) {
      const autoResize = () => {
        current.style.height = 'auto';
        current.style.height = `${current.scrollHeight}px`;
      };

      current.addEventListener('input', autoResize);

      return () => {
        current.removeEventListener('input', autoResize);
      };
    }

    return () => {};
  }, [textAreaRef]);

  return (
    <textarea
      ref={textAreaRef}
      className="InputLine"
      value={`${leadingText} ${value}`}
      wrap="soft"
      autoCorrect="off"
      autoComplete="off"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          setOutput((output) => [...output, `${leadingText} ${value}`]);
          processCommand();
        }
      }}
      onChange={(e) => {
        setValue(e.target.value.slice(leadingText.length + 1));
      }}
    />
  );
};

InputLine.propTypes = {
  textAreaRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  leadingText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  setOutput: PropTypes.func.isRequired,
  processCommand: PropTypes.func.isRequired,
};

export default InputLine;
