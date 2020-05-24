import React from 'react';
import PropTypes from 'prop-types';
import './Standings.scss';

export const SeasonStandings = props => {
  const { season, leagues } = props;

  return (
    <React.Fragment>
      <h2>{ season }</h2>
      <hr></hr>
      <div className="season-standings">
        { leagues.map(league => (<section>{league}</section>)) }
      </div>
    </React.Fragment>
  );
};

SeasonStandings.propTypes = {
  season: PropTypes.number,
  leagues: PropTypes.arrayOf(PropTypes.shape({})),
};

SeasonStandings.defaultProps = {
  season: new Date().getFullYear(),
  leagues: [],
};

export default SeasonStandings;