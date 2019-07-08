import React from 'react';
import PropTypes from 'prop-types';
import './AppFooter.scss';

export const AppFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="app-footer">
      <p app-footer="app-footer_p">The information used here was obtained free of charge from and is copyrighted by Retrosheet.  Interested parties may contact Retrosheet at "www.retrosheet.org".</p>
      <h4 className="app-footer__h4">&copy; {year} &bull; Steven J Burns</h4>
    </footer>
  );
};

AppFooter.propTypes = {};

AppFooter.defaultProps = {};

export default AppFooter;