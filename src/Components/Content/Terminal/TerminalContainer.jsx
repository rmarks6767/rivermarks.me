import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TerminalTab, TerminalTabs } from './Tabs';
import CloseDialog from './CloseDialog/CloseDialog';

const TerminalContainer = ({
  isInput,
  focusTextArea,
  tab,
  setTab,
  tabs,
  setTabs,
  children,
}) => {
  const [open, setOpen] = useState('');

  return (
    <>
      <CloseDialog
        tab={tab}
        tabs={tabs}
        setTab={setTab}
        setTabs={setTabs}
        open={open}
        handleClose={() => setOpen('')}
      />
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
          <TerminalTabs
            style={{ width: '100%' }}
            value={tab}
            onChange={(_, newValue) => {
              setTab(newValue);
            }}
          >
            {tabs.map(({ label, closable }) => (
              <TerminalTab
                closable={closable}
                tabIndex={0}
                key={label}
                label={label}
                value={label}
                numTabs={tabs.length}
                selectedTab={tab}
                onClick={() => setOpen(label)}
              />
            ))}
          </TerminalTabs>
          <div className="content">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

TerminalContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isInput: PropTypes.bool,
  tab: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    closable: PropTypes.bool,
  })),
  setTab: PropTypes.func,
  setTabs: PropTypes.func,
  focusTextArea: PropTypes.func,
};

TerminalContainer.defaultProps = {
  isInput: false,
  tabs: [],
  tab: 'Home',
  setTab: () => {},
  setTabs: () => {},
  focusTextArea: () => {},
};

export default TerminalContainer;
