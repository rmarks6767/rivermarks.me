import React, { useState } from 'react';
import {
  AppBar, Toolbar, Switch, FormControlLabel, IconButton, Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [terminalMode, setTerminalMode] = useState(false);

  return (
    <AppBar>
      <Toolbar position="static">
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          rivermarks.me
        </Typography>
        <FormControlLabel
          checked={terminalMode}
          onChange={(e) => setTerminalMode(e.target.checked)}
          control={<Switch />}
          label="Terminal Mode"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
