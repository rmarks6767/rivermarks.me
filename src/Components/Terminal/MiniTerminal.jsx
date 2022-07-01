import React from 'react';
import PropTypes from 'prop-types';
import './Terminal.scss';

/**
 * This is a little terminal to control the visibility of the big terminal
 * @param { isActive, setIsActive } params Used to control the big terminal
 * @returns The MiniTerminal component
 */
const MiniTerminal = ({ isActive, setIsActive }) => (
  <div
    className={`mini-terminal ${isActive ? 'no-tint' : 'add-tint'}`}
    role="button"
    aria-label="Open Terminal Control"
    tabIndex="0"
    onClick={() => setIsActive(!isActive)}
    onKeyDown={(e) => {
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
        setIsActive(e);
      }
    }}
  >
    <div className="top-bar">
      <div className="dots">
        <div className="dot red" />
        <div className="dot yellow" />
        <div className="dot green" />
      </div>
    </div>
    <div className="content" />
  </div>
);

MiniTerminal.propTypes = {
  setIsActive: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default MiniTerminal;
