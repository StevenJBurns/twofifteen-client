import React from 'react';
import { Link } from 'react-router-dom';
import './AppNav.scss';

export const AppNav = () => {
  return (
    <nav className="app-nav">
      <ul className="app-nav__ul">
        <li><Link to="/seasons">SEASONS</Link></li>
        <li><Link to="/venues">VENUES</Link></li>
        <li><Link to="/franchises">FRANCHISES</Link></li>
        <li><Link to="/people">PEOPLE</Link></li>
        <li><Link to="/games">GAMES</Link></li>
        <li><Link to="/achievements">ACHIEVEMENTS</Link></li>
      </ul>
    </nav>
  );
};
