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
    <Box display='flex' justifyContent="center" alignItems="center" my={2} color="#D0D0D0">
      <Button
        color="inherit"
        component={Link}
        to={`/seasons/${+year - 1}`}
        startIcon={<DoubleArrowOutlinedIcon style={{ transform: 'rotate(-180deg)'}} />}
        disabled={isPrevSeasonDisabled}
        variant="outlined"
        >
        { isPrevSeasonDisabled ? '' : +year - 1}
      </Button>
      <h1 className={classes.year}>{year}</h1>
      <Button
        color="inherit"
        component={Link}
        to={`/seasons/${+year + 1}`}
        endIcon={<DoubleArrowOutlinedIcon />}
        disabled={isNextSeasonDisabled}
        variant="outlined"
        >
        { isNextSeasonDisabled ? '' : +year + 1}
      </Button>
    </Box>
  );
};
