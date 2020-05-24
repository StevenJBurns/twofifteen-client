import React from 'react';
import PropTypes from 'prop-types';
import './LeagueStandings.scss';

export const LeagueStandings = props => {
  const { divisons } = props;

  return (
    <section className="league-standings">
      { props.children }
    </section>
  );
};

LeagueStandings.propTypes = {};

LeagueStandings.defaultProps = {};

export default LeagueStandings;
