import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/app/Layout';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const [ activeLinkIs, setActiveLinkIs ] = useState('Home');

  useEffect(() => {
    // Remove the server-side injected CSS to support MUI.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    };
  }, []);

  return (
    <Layout activeLinkIs = {activeLinkIs} setActiveLinkIs = {setActiveLinkIs}>
      <Component { ...pageProps } />
    </Layout>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
