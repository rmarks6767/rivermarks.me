import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const App = () => {
  const [terminalMode, setTerminalMode] = useState(false);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header terminalMode={terminalMode} setTerminalMode={setTerminalMode} />
      </Grid>
      <Grid item xs={12}>
        <Content terminalMode={terminalMode} />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default App;
