import React from 'react';
// import { PropTyoes } from 'prop-types;
import './PageSeasons.scss';

export const PageSeason = props => {
	const [season, setSeason] = React.useState(currentYear);

	const currentYear = new Date().getFullYear()
	
	return (
		<React.Fragment>
			<h1>{season}</h1>
		</React.Fragment>
	);
}

export default PageSeason;
