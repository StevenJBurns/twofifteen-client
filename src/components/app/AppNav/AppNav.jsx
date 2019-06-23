import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './AppNav.css';

export const AppNav = props => {
  const [] = React.useState();

  return (
    <nav className="app-nav">
      <ul className="app-nav__ul">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ballparks">Ballparks</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/players">Players</Link></li>
        <li><Link to="/games">Games</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
      </ul>
    </nav>
  );
};

// AppNav.propTypes = {};

// AppNav.defaultProps = {};

export default AppNav;