import React from 'react';
import { PropTypes } from 'prop-types';
import { SeasonSelect } from '../../ui/SeasonsSelect/SeasonsSelect';
import { createSeasonsList } from '../../../utils/createSeasonsList';
import './PageSeasons.scss';

export const PageSeason = props => {
	const [season, setSeason] = React.useState(currentYear - 1);

	const currentYear = new Date().getFullYear();
	
	return (<SeasonSelect seasons={createSeasonsList()} />);
};

PageSeason.propTypes = {};

PageSeason.defaultProps = {};

export default PageSeason;
