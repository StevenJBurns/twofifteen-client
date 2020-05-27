import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import DoubleArrowOutlinedIcon from '@material-ui/icons/DoubleArrowOutlined';
import { useStyles } from './SeasonHeaderDetail.styles';

export const SeasonDetailHeader = props => {
  const classes = useStyles();
  const { year } = useParams();

  const isPrevSeasonDisabled = +year === props.firstSeason;
  const isNextSeasonDisabled = +year === props.lastSeason;

  return (
    <Box display='flex' justifyContent="space-between" alignItems="center" mx="auto" my={2} color="#D0D0D0">
      <Button
        className={classes.button}
        component={Link}
        to={`/seasons/${+year - 1}`}
        startIcon={<DoubleArrowOutlinedIcon style={{ transform: 'rotate(-180deg)'}} />}
        disabled={isPrevSeasonDisabled}
        variant="outlined"
        color="inherit"
        >
        { isPrevSeasonDisabled ? '' : +year - 1}
      </Button>
      <h2 className={classes.year}>{year}</h2>
      <Button
        className={classes.button}
        component={Link}
        to={`/seasons/${+year + 1}`}
        endIcon={<DoubleArrowOutlinedIcon />}
        disabled={isNextSeasonDisabled}
        variant="outlined"
        color="inherit"
        >
        { isNextSeasonDisabled ? '' : +year + 1}
      </Button>
    </Box>
  );
};
