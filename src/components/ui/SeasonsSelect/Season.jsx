import React from 'react';
import PropTypes from 'prop-types';
import './Season.scss';

export const Season = props => {
  const { season, isSelected, toggleSeason } = props;

  // const [isSelected, setIsSelected] = React.useState(false);

  const bgColor = isSelected ? 'green' : '#D0D0D0';

  const handleClick = e => {
    toggleSeason(season);
    // setIsSelected(!isSelected);
  };

  return (
    <li className="season-year" style={{backgroundColor: bgColor}} onClick={handleClick}>
      {season}
    </li>
  );
};

Season.propTypes = {};

Season.defaultProps = {};

export default Season;
