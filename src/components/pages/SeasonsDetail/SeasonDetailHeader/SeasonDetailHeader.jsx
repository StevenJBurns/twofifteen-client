import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import { useStyles } from './SeasonHeaderDetail.styles';

export const SeasonDetailHeader = props => {
  const classes = useStyles();
  const { year } = useParams();

  const isPrevSeasonDisabled = +year === props.firstSeason;
  const isNextSeasonDisabled = +year === props.lastSeason;

  console.log({isPrevSeasonDisabled, isNextSeasonDisabled});

  return (
    <Box display='flex' justifyContent="center" alignItems="center" my={2} color="#D0D0D0">
      <Button color="inherit" disabled={isPrevSeasonDisabled}>
        { isPrevSeasonDisabled ? '' : +year - 1}
      </Button>
      <h1 className={classes.year}>{year}</h1>
      <Button color="inherit" disabled={isNextSeasonDisabled}>
        { isNextSeasonDisabled ? '' : +year + 1}
      </Button>
    </Box>
  );
};
