import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const PageNav = props => {
  return (
    <nav style={{ color: "#D0D0D0", textAlign: 'center'}}>
      <ul>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/venues">VENUES</NavLink>
        <NavLink to="/franchises">TEAMS</NavLink>
        <NavLink to="/seasons">SEASONS</NavLink>
        <NavLink to="/games">GAMES</NavLink>
      </ul>
      <hr></hr>
    </nav>
  );
};

export default PageNav;