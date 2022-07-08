import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './TextPrint.scss';

const TextPrint = ({
  text,
  delay,
  keepCursor,
  headingLevel,
}) => {
  const [cursorVisible, setCursorVisible] = useState(false);
  const [characters, setCharacters] = useState(
    [...text]
      .map((character, index) => {
        const visibleDelay = index + delay;

        return {
          character,
          visibleDelay,
          visible: false,
        };
      }),
  );

  useEffect(() => {
    if (characters) {
      const timeOuts = [];

      characters.forEach(({ visibleDelay }, index) => {
        timeOuts.push(setTimeout(() => {
          setCharacters((chars) => {
            if (index === 0) {
              setCursorVisible(true);
            }

            if (index === characters.length - 1 && !keepCursor) {
              setCursorVisible(false);
            }

            return chars.map((char) => {
              if (char.visibleDelay === visibleDelay) {
                return {
                  ...char,
                  visible: true,
                };
              }

              return char;
            });
          });
        }, visibleDelay * 100));
      });

      return () => {
        timeOuts.forEach((timeOut) => clearTimeout(timeOut));
      };
    }

    return () => {};
  }, []);

  const title = (
    <span aria-label={text} aria-level="1" role="heading">
      {characters.map(({ character, visible, visibleDelay }) => (
        <span
          key={visibleDelay}
          aria-hidden="true"
          style={{ display: visible ? null : 'none' }}
        >
          {`${character}`}
        </span>
      ))}
    </span>
  );

  return (
    <div className="text-print">
      {(() => {
        switch (headingLevel) {
          case 'h2': return <h2>{title}</h2>;
          default: return <h1>{title}</h1>;
        }
      })()}
      {(cursorVisible) && <div className={`text-cursor ${headingLevel}`} />}
    </div>
  );
};

TextPrint.propTypes = {
  text: PropTypes.string.isRequired,
  headingLevel: PropTypes.string,
  delay: PropTypes.number,
  keepCursor: PropTypes.bool,
};

TextPrint.defaultProps = {
  delay: 0,
  keepCursor: false,
  headingLevel: 'h1',

};

export default TextPrint;
