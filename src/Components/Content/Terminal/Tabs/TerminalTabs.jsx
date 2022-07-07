import React from 'react';
import { styled } from '@mui/material/styles';
import { Tabs } from '@mui/material';

const TerminalTabs = styled((props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tabs {...props} />
))(() => ({
  minHeight: '32px',
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
}));

export default TerminalTabs;
