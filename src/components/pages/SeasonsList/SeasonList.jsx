import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, CircularProgress } from '@material-ui/core';
import { Page } from '../Page/Page';
import { SeasonsTable } from './SeasonsTable/SeasonsTable';
import { getAllSeasonThunk as getAllSeasons} from 'state/actions/seasons/getAllSeasons';
import { selectAllSeasons } from 'state/selectors/selectSeasons';
import './SeasonList.scss';

export const SeasonsList = () => {
  const dispatch = useDispatch();
  const seasons = useSelector(selectAllSeasons);

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

  if (!seasons.list.length) return (<Page />);

	return (
    <Page>
      <SeasonsTable />
    </Page>
  );
};
