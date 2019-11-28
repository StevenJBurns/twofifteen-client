import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { createSeasonsList } from '../../../utils/createSeasonsList';
import './NavSeasons.scss';

export const NavSeasons = () => {
  return (
    <>
      <nav className="nav-season">
        {
          createSeasonsList().map(season =>
            (<Link key={season} className="season" to={`/seasons/${season}`}>{season}</Link>))
        }
      </nav>
    </>
  );
};

export default NavSeasons;
