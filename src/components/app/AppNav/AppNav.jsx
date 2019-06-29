import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './AppNav.css';

export const AppNav = props => {
  const [] = React.useState();

  return (
    <nav className="app-nav">
      <ul className="app-nav__ul">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/seasons">SEASONS</Link></li>
        <li><Link to="/ballparks">BALLPARKS and VENUES</Link></li>
        <li><Link to="/teams">TEAMS and FRANCHISES</Link></li>
        <li><Link to="/players">PLAYERS</Link></li>
        <li><Link to="/games">GAMES</Link></li>
        <li><Link to="/achievements">ACHIEVEMENTS and RECORDS</Link></li>
      </ul>
    </nav>
  );
};

// AppNav.propTypes = {};

// AppNav.defaultProps = {};

export default AppNav;