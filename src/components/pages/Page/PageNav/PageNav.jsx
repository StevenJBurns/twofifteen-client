import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { styles } from './PageNav.styles';

const useStyles = makeStyles(styles);

export const PageNav = () => {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <Divider className={classes.divider} />
      <Box my='0.5rem'>
        <Link to="/seasons">SEASONS</Link>
        <Link to="/games">GAMES</Link>
        <Link to="/franchises">TEAMS</Link>
        <Link to="/people">PEOPLE</Link>
        <Link to="/venues">VENUES</Link>
        <Link to="/achievements">ACHIEVEMENTS</Link>
      </Box>
      <Divider className={classes.divider} />
    </nav>
  );
};
