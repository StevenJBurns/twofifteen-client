import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Season.scss';

export const Season = props => {
  const { season, isSelected, toggleSeason, history, params } = props;

  // const [isSelected, setIsSelected] = React.useState(false);
  console.log(props.match);

  const bgColor = isSelected ? 'green' : '#D0D0D0';

  const handleClick = e => {
    toggleSeason(season);
    // history.push("")
    // setIsSelected(!isSelected);
  };

  return (
    <Link className="season-year__link" to={`/seasons/${season}`} component={null}>
      <li className="season-year" style={{backgroundColor: bgColor}} onClick={handleClick}>
        {season}
      </li>
    </Link>
  );
};

Season.propTypes = {};

Season.defaultProps = {};

export default Season;
