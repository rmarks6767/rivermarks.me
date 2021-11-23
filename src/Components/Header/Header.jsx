import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormControlLabel, Switch } from '@mui/material';
import './Header.scss';

const Header = ({ terminalMode, setTerminalMode }) => (
  <div className="header">
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button>
        Projects
      </Button>
      <Button>
        Experience
      </Button>
      <Button>
        About Me
      </Button>
    </div>
    <FormControlLabel
      control={(
        <Switch
          checked={terminalMode}
          onClick={() => setTerminalMode((c) => !c)}
        />
        )}
      label="Terminal Mode"
    />
  </div>
);

Header.propTypes = {
  terminalMode: PropTypes.bool.isRequired,
  setTerminalMode: PropTypes.func.isRequired,
};

export default Header;
