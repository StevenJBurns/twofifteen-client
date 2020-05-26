import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, CircularProgress} from '@material-ui/core';
import { Page } from '../Page/Page';
import { SeasonDetailHeader } from './SeasonDetailHeader/SeasonDetailHeader'
import { getAllSeasonThunk as getAllSeasons} from 'state/actions/seasons/getAllSeasons';
import { selectAllSeasons } from 'state/selectors/selectSeasons';
import './SeasonsDetail.scss';

export const SeasonsDetail = () => {
  const dispatch = useDispatch();
  const seasons = useSelector(selectAllSeasons);

  const years = seasons.list.map(season => season.year);
  const firstSeason = Math.min(...years);
  const lastSeason = Math.max(...years);

  React.useEffect(() => {
    if (!seasons.list.length) dispatch(getAllSeasons());
  }, [dispatch, seasons.list.length]);

  if (seasons.isPending) return (
    <Page>
      <Box flexGrow="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <CircularProgress size={128} />
      </Box>
    </Page>
  );

  if (!seasons.list.length) return null;

  return (
    <Page>
      <SeasonDetailHeader firstSeason={firstSeason} lastSeason={lastSeason} />
    </Page>
  );
};
