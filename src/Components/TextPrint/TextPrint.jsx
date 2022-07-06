import React from 'react';
import PropTypes from 'prop-types';
import './TextPrint.scss';

const TextPrint = ({ text, delay }) => (
  <div className="TextPrint">
    <h1>
      <span aria-label={text} aria-level="1" role="heading">
        {[...text].map((char, index) => {
          const animationDelay = `${(0.5 + index / 10) + delay}s`;

          return (
            <span
              aria-hidden="true"
              key={animationDelay}
              style={{ animationDelay }}
            >
              {char}
            </span>
          );
        })}
      </span>
    </h1>
  </div>
);

TextPrint.propTypes = {
  text: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

TextPrint.defaultProps = {
  delay: 0,
};

export default TextPrint;
