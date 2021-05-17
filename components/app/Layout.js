import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import theme from '../../styles/theme';
import Header from '../header/Header';

const Layout = ({ children, activeLinkIs, setActiveLinkIs }) => {
  return (
    <div id="app">
      <ThemeProvider theme = {theme}>
        <CssBaseline />
        
        <Header activeLinkIs = {activeLinkIs} setActiveLinkIs = {setActiveLinkIs} />

        <div id="page-content">
          {React.cloneElement(children, { setActiveLinkIs: setActiveLinkIs })}
        </div>

      </ThemeProvider>
    </div>
  );
};

export default Layout;