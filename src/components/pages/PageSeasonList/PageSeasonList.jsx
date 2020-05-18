import React from 'react';
import { Page } from '../Page/Page';
import { NavSeasons } from '../../nav/NavSeasons/NavSeasons';
import './PageSeasonList.scss';

export const PageSeasonList = () => {
	return (
    <Page>
      <NavSeasons />
    </Page>
  );
};
