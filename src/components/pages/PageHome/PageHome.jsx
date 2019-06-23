import React from 'react';
// import PropTypes from 'prop-types';
import { AppNav } from '../../app/AppNav/AppNav';
import './PageHome.css';

export const PageHome = props => {
  const [] = React.useState();

  return (
    <main id="page-home">
      <div id="page-home__div-upper" />
      <h1 id="page-home__h1">TWOFIFTEEN</h1>
      <div id="page-home__div-lower" />
      <h4 id="page-home__h4">Subtitle Text Goes Here</h4>
      <div id="page-home__nav">
        <AppNav />
      </div>
      {/* <div id="page-home__nav" /> */}
    </main>
  );
};

// PageHome.propTypes = {};

// PageHome.defaultProps = {};

export default PageHome