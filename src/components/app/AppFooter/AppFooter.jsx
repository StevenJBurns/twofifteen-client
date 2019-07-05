import React from 'react';
import PropTypes from 'prop-types';
import './AppFooter.scss';

export const AppFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <h4>&copy; {year} Steven J Burns</h4>
      <p>The information used here was obtained free of charge from and is copyrighted by Retrosheet.  Interested parties may contact Retrosheet at "www.retrosheet.org".</p>
    </footer>
  );
};

AppFooter.propTypes = {};

AppFooter.defaultProps = {};

export default AppFooter;