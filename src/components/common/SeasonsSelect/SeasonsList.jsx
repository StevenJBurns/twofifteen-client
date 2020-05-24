import React from 'react';
import PropTypes from 'prop-types';
import { Season } from './Season';
import './SeasonsList.scss';

export const SeasonsList = props => {
  const { seasons, selectedSeasons, toggleSeason } = props;

  return (
    <ul className="seasons-list">
      {
        seasons && seasons.map(season =>
          <Season
            key={season}
            season={season}
            isSelected={selectedSeasons.includes(season)}
            toggleSeason={toggleSeason} />
        )
      }
    </ul>
  );
};

SeasonsList.propTypes = {};

SeasonsList.defaultProps = {};

export default SeasonsList;