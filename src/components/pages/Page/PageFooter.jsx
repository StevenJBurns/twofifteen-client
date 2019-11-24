import React from 'react';
import PropTypes from 'prop-types';

export const PageFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ color: "#D0D0D0", textAlign: 'center'}}>
      <p app-footer="app-footer_p">The information used here was obtained free of charge from and is copyrighted by Retrosheet.  Interested parties may contact Retrosheet at&nbsp;
        <a href="www.retrosheet.org" style={{margin: 'inherit'}}>www.retrosheet.org</a>.
      </p>
      <hr />
      <h4 className="app-footer__h4">&copy; {year} &bull; Steven J Burns</h4>
    </footer>
  )
};

export default PageFooter;