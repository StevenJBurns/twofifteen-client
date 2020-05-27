import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { styles } from './PageNav.styles';

const useStyles = makeStyles(styles);
/* style for React Router selected Links*/
const activeStyle = { color: '#DDDD00' };

export const PageNav = () => {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <Divider className={classes.divider} />
      <Box my='0.5rem'>
        <NavLink activeStyle={activeStyle} to="/seasons">SEASONS</NavLink>
        <NavLink activeStyle={activeStyle} to="/games">GAMES</NavLink>
        <NavLink activeStyle={activeStyle} to="/franchises">TEAMS</NavLink>
        <NavLink activeStyle={activeStyle} to="/people">PEOPLE</NavLink>
        <NavLink activeStyle={activeStyle} to="/venues">VENUES</NavLink>
        <NavLink activeStyle={activeStyle} to="/locations">LOCATIONS</NavLink>
        <NavLink activeStyle={activeStyle} to="/achievements">ACHIEVEMENTS</NavLink>
      </Box>
      <Divider className={classes.divider} />
    </nav>
  );
};
