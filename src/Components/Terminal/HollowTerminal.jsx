import React from 'react';
import PropTypes from 'prop-types';
import { TerminalTab, TerminalTabs } from './Tabs';
import './Terminal.scss';

const HollowTerminal = ({
  tab, setTab, tabs, children,
}) => {
  const Tab = TerminalTab(tabs.length);

  return (
    <div className="terminal-container">
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
            {tabs.map(({ key, label }) => (
              <Tab key={key} label={label} />
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

HollowTerminal.propTypes = {
  children: PropTypes.node.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  tab: PropTypes.number,
  setTab: PropTypes.func,
};

HollowTerminal.defaultProps = {
  tabs: [],
  tab: 0,
  setTab: () => {},
};

export default HollowTerminal;
