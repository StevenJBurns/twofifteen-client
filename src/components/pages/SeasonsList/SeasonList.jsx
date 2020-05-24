import React from 'react';
import { Page } from '../Page/Page';
import { SeasonsTable } from './SeasonsTable/SeasonsTable';
import './SeasonList.scss';

export const SeasonsList = () => {
	return (
    <Page>
      <SeasonsTable />
    </Page>
  );
};
