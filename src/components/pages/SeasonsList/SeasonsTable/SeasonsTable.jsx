import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, GridList, GridListTile, makeStyles } from '@material-ui/core/';
import { getAllSeasonThunk as getAllSeasons} from 'state/actions/seasons/getAllSeasons';
import { selectAllSeasons } from 'state/selectors/selectSeasons';
import SeasonData from 'data/seasons/seasons';
import './SeasonsTable.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    '& li:first-child': {
      textAlign: 'right',
    },
  },
  tile: {
    textAlign: 'center',
    '& a:link': {
      color: '#D0D0D0',
      textDecoration: 'none',
      transition: '0.25s',
    },
    '& a:visited': {
      color: '#D0D0D0',
    },
    '& a:hover': {
      color: '#303030',
      backgroundColor: '#D0D0D0',
    },
  }
})

export const SeasonsTable = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const years = useSelector(selectAllSeasons);
  const seasons = SeasonData.map(season => season.year).sort((a, b) => a - b);
  const decades = {};

  seasons.forEach(season => {
    const s = Number(season).toString().split('');
    s[3] = 0;
    const decade = s.join('');
    if (!Object.keys(decades).includes(decade)) decades[decade] = [];
    decades[decade].push(season);
  });

  React.useEffect(() => {
    if (!years.list.length) dispatch(getAllSeasons());
  }, [dispatch, years.list.length]);

  return (
    <Box display="flex" justifyContent="center">
      <GridList className={classes.root} cols={10} cellHeight={24}>
        {
          Object.keys(decades).map(decade => (
            decades[decade].map(year => {
              const colWidth =
                decades[decade].indexOf(year) === 0 && year % 10 !== 0 ?
                  year % 10 + 1 : 1;

              return (
                <GridListTile className={classes.tile} cols={colWidth}>
                  <Link to={`/seasons/${year}`}>{year}</Link>
                </GridListTile>
              )
            })
          ))
        }
      </GridList>
    </Box>
  );
};
