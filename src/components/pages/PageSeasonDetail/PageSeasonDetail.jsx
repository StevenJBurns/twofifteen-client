import React from 'react';
import PropTypes from 'prop-types';
import './PageSeasonDetail.scss';

export const PageSeasonDetail = props => (
  <section className="page-season">
    <h2 className="page-season__h1">&larr; {props.match.params.season}</h2>
    <hr className="page-season__hr"></hr>
  </section>
);

export default PageSeasonDetail;
