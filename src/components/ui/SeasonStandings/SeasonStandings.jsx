import React from 'react';
import PropTypes from 'prop-types';
import './SeasonStandings.scss';

export const SeasonStandings = props => {
  const { season, leagues, divisions, teams } = props;

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
};

SeasonStandings.defaultProps = {
  season: new Date().getFullYear(),
};

export default SeasonStandings;