import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { FranchisdeSeasonChart } from './FranchiseSeasonChart';

const StyledCell = withStyles({
  root: {
    color: '#0F0F0F',
  }
})(TableCell);

const useStyles = makeStyles({
  root: {
    color: 'lime',
  },
  paper: {
    margin: '0 auto',
    color: "pink",
    backgroundColor: 'transparent',
  },
  table: {
    maxWidth: 360,
    backgroundColor: "#B0B0B0",
  },
  row: {

  },
  head: {
    color: 'white',
    backgroundColor: "#909090",
  }
})

export const FranchiseSeasonList = ({ seasons }) => {
  const classes = useStyles();

  return seasons ? (
    <Paper className={classes.paper}>
      <Table size="small" className={classes.table}>
        <TableHead className={classes.head}>
          <TableRow className={classes.row}>
            <TableCell align="center">YEAR</TableCell>
            <TableCell align="center">LEAGUE</TableCell>
            <TableCell align="center">DIVISION</TableCell>
            <TableCell align="center">W</TableCell>
            <TableCell align="center">L</TableCell>
            <TableCell align="center">T</TableCell>
            <TableCell align="center">PCT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {seasons.map(season => {
            const pct = season.record.W / (season.record.W + season.record.L);
            return (
              <TableRow key={season.id} className={classes.row}>
                <StyledCell component="th">{season.id}</StyledCell>
                <StyledCell align="center">{season.league}</StyledCell>
                <StyledCell align="center">{season.division}</StyledCell>
                <StyledCell align="center">{season.record.W}</StyledCell>
                <StyledCell align="center">{season.record.L}</StyledCell>
                <StyledCell align="center">{season.record.T}</StyledCell>
                <StyledCell align="center">{pct.toFixed(3)}</StyledCell>
              </TableRow>
            )}
          )}
        </TableBody>
      </Table>
      <FranchisdeSeasonChart data={seasons.map(season => ({w: season.record.W, l: season.record.L}))} />
    </Paper>
  ) : null;
};
