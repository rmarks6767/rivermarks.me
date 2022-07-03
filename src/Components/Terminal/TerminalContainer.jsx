import React from 'react';
import PropTypes from 'prop-types';
import { TerminalTab, TerminalTabs } from './Tabs';
import './Terminal.scss';

const TerminalContainer = ({
  isInput,
  focusTextArea,
  tab,
  setTab,
  tabs,
  children,
}) => {
  const Tab = TerminalTab(tabs.length);

  return (
    <div
      className="terminal-container"
      {
        ...(isInput && {
          role: 'textbox',
          onClick: focusTextArea,
          onKeyDown: focusTextArea,
          tabIndex: 0,
        }
      )}
    >
      <div className="terminal">
        <div className="top-bar">
          <div className="dots">
            <div className="dot red" />
            <div className="dot yellow" />
            <div className="dot green" />
          </div>
        </div>
        {tabs.length > 1 && (
          <TerminalTabs
            style={{ width: '100%' }}
            value={tab}
            onChange={(_, newValue) => setTab(newValue)}
          >
            {tabs.map(({ label }) => (
              <Tab
                key={label}
                label={label}
                value={label}
              />
            ))}
          </TerminalTabs>
        )}
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

TerminalContainer.propTypes = {
  isInput: PropTypes.bool,
  focusTextArea: PropTypes.func,
  tab: PropTypes.string,
  setTab: PropTypes.func,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  })),
  children: PropTypes.node.isRequired,
};

TerminalContainer.defaultProps = {
  isInput: false,
  focusTextArea: () => {},
  tabs: [],
  tab: 'Home',
  setTab: () => {},
};

export default TerminalContainer;
