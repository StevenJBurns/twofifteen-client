import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { Page } from '../Page/Page';
import './PageSeasonDetail.scss';

export const PageSeasonDetail = props => {
  const params = useParams();
  const history = useHistory();
  
  return (
    <Page>
      <h2 className="page-season__h1" onClick={() => history.goBack()}>
        &larr; {params.season}
      </h2>
      <hr className="page-season__hr"></hr>
      <h3>World Series</h3>
      <h3>Attendance</h3>
      <h3>All Star Game</h3>
      <h3>Leaders</h3>
    </Page>
  );
};

export default PageSeasonDetail;
