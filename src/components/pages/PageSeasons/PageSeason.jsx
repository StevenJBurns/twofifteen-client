import React from 'react';
import { PropTypes } from 'prop-types';
import { createSeasonsList } from '../../../utils/createSeasonsList';
import './PageSeasons.scss';

export const PageSeason = props => {
	const [season, setSeason] = React.useState(currentYear);

	const currentYear = new Date().getFullYear()
	
	return (
    <ul className="season-list">
      { createSeasonsList().map(year =>
        <li className="season-list__year" key={year}>{year}</li>)
      }
    </ul>	
	);
}

export default PageSeason;
