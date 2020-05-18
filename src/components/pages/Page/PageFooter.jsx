import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '8rem',
    color: "#D0D0D0",
  },
  p: {
    margin: '1rem auto',
    display: 'inline-block',
    minWidth: 280,
    maxWidth: 600,
  },
  h4: {
    display: 'inline-block',
    margin: '1rem auto',
  },
  hr : {
    width: '100%',
    minWidth: 280,
  },
})

export const PageFooter = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <p className={classes.p}>The information used here was obtained free of charge from and is copyrighted by Retrosheet.  Interested parties may contact Retrosheet at&nbsp;
        <a href="www.retrosheet.org" style={{margin: 'inherit'}}>www.retrosheet.org</a>.
      </p>
      <hr className={classes.hr}></hr>
      <h4 className={classes.h4}>&copy; {year} &bull; Steven J Burns</h4>
    </footer>
  )
};
