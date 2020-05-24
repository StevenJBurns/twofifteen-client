import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import { AppNav } from '../../app/AppNav/AppNav';
import { styles } from './Home.styles';

const useStyles = makeStyles(styles);

export const PageHome = () => {
  const classes = useStyles();

  return (
    <Container className={classes.page} maxWidth={false}>
      <Box className={classes.upper}>
        <h1>TWOFIFTEEN</h1>
        <h4>An open source baseball database</h4>
      </Box>
      <Box className={classes.lower}>
        <AppNav />
      </Box>
    </Container>
  );
};
