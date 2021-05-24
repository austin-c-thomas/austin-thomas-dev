import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { useState } from 'react';
import theme from '../../styles/theme';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Layout = ({ children }) => {
  const [ position, setPosition ] = useState('Home');
  return (
    <div id="app">
      <ThemeProvider theme = {theme}>
        <CssBaseline />
        
        <Header position = {position} setPosition = {setPosition} />

        <div id="page-content">
          {React.cloneElement(children, { position, setPosition })}
        </div>

        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Layout;