import React from 'react';
import PropTypes from 'prop-types';
import './PageSeasonDetail.scss';

export const PageSeasonDetail = props => (
  <section className="page-season">
    <h2 className="page-season__h1">&larr; {props.match.params.season}</h2>
    <hr className="page-season__hr"></hr>
    <h3>World Series</h3>
    <h3>Attendance</h3>
    <h3>All Star Game</h3>
    <h3>Leaders</h3>
  </section>
);

export default PageSeasonDetail;
