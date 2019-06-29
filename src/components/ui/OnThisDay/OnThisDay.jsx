import React from "react";
import PropTypes from 'prop-types';
import './OnThisDay.scss';

export const OnThisDay = props => {
  const today = new Date().toDateString();

  return (
    <React.Fragment>
      <h3>{today}</h3>
      <p></p>
    </React.Fragment>
  );
}