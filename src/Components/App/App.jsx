import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
// import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';
// import Footer from '../Footer/Footer';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    {/* <Navbar></Navbar>, */}
      <Content></Content>
    {/* <Footer></Footer> */}
    </ThemeProvider>

  );
}

export default App;
