import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '8rem',
    color: "#D0D0D0",
    backgroundColor: 'darkblue',
    textAlign: 'center',
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
  const styles = useStyles();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.p}>The information used here was obtained free of charge from and is copyrighted by Retrosheet.  Interested parties may contact Retrosheet at&nbsp;
        <a href="www.retrosheet.org" style={{margin: 'inherit'}}>www.retrosheet.org</a>.
      </p>
      <hr className={styles.hr}></hr>
      <h4 className={styles.h4}>&copy; {year} &bull; Steven J Burns</h4>
    </footer>
  )
};

export default PageFooter;