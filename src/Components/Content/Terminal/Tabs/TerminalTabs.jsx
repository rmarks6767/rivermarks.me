import React from 'react';
import { styled } from '@mui/material/styles';
import { Tabs } from '@mui/material';

const TerminalTabs = styled((props) => (
  <Tabs
    variant="scrollable"
    allowScrollButtonsMobile
    {...props}
  />
))(() => ({
  color: 'white',
  minHeight: '32px',
  backgroundColor: '#626262',
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '.MuiTabs-scrollButtons.Mui-disabled': {
    opacity: 0.3,
  },
}));

export default TerminalTabs;
