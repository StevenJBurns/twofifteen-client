import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './AppNav.scss';

export const AppNav = () => {
  return (
    <nav className="app-nav">
      <ul className="app-nav__ul">
        <li><Link to="/seasons">SEASONS</Link></li>
        <li><Link to="/venues">BALLPARKS and VENUES</Link></li>
        <li><Link to="/franchises">TEAMS and FRANCHISES</Link></li>
        <li><Link to="/people">PEOPLE</Link></li>
        <li><Link to="/games">GAMES</Link></li>
        <li><Link to="/achievements">ACHIEVEMENTS and RECORDS</Link></li>
      </ul>
    </nav>
  );
};

export default AppNav;