import React from 'react';
import { PropTypes } from 'prop-types';
import { Page } from '../Page/Page';
import { NavSeasons } from '../../nav/NavSeasons/NavSeasons';
// import { SeasonSelect } from '../../ui/SeasonsSelect/SeasonsSelect';
// import { createSeasonsList } from '../../../utils/createSeasonsList';
import './PageSeasonList.scss';

export const PageSeasonList = props => {
	const currentYear = new Date().getFullYear();
	
	return (
    <Page>
      <NavSeasons />
    </Page>
  );
};

PageSeasonList.propTypes = {};

PageSeasonList.defaultProps = {};

export default PageSeasonList;
