import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    color:'#D0D0D0',
  },
});

export const PageHeader = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <h1>TWOFIFTEEN</h1>
    </header>
  );
};
