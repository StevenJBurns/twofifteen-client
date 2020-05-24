import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  container: {
    maxWidth: 720,
    margin: '4rem auto',
    '& .MuiInput-root': {
      width: '100%',
    },
  }
});