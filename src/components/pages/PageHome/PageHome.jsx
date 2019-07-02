import React from 'react';
import PropTypes from 'prop-types';
import { AppNav } from '../../app/AppNav/AppNav';
import './PageHome.scss';

export const PageHome = props => {
  const [] = React.useState();

  return (
    <main id="page-home">
      <div id="page-home__div-upper" />
      <h1 id="page-home__h1">TWOFIFTEEN</h1>
      <div id="page-home__div-lower" />
      <h4 id="page-home__h4">An open source baseball database</h4>
      <div id="page-home__nav">
        <AppNav />
      </div>
      {/* <div id="page-home__nav" /> */}
    </main>
  );
};

PageHome.propTypes = {};

PageHome.defaultProps = {};

export default PageHome