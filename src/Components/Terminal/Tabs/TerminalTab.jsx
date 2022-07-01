import React from 'react';
import { styled } from '@mui/material/styles';
import { Tab } from '@mui/material';

const TerminalTab = (numTabs) => styled((props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tab {...props} />
))(() => ({
  minHeight: '32px',
  padding: '0.5px',
  width: '100%',
  maxWidth: `${100 / numTabs}%`,
  color: 'white',
  backgroundColor: '#444444',
  '&:hover': {
    color: 'white',
    backgroundColor: '#565656',
    opacity: 1,
    transition: 'background-color 0.1s ease-in',
  },
  '&.Mui-selected': {
    color: 'white',
    backgroundColor: '#626262',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#565656',
  },
  '&.MuiTabs-indicator': {
    backgroundColor: 'transparent',
  },
}));

export default TerminalTab;
