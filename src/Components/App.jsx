import React from 'react';
import Grid from '@mui/material/Grid';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const App = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Header />
    </Grid>
    <Grid item xs={12}>
      <Content />
    </Grid>
    <Grid item xs={12}>
      <Footer />
    </Grid>
  </Grid>
);

export default App;
