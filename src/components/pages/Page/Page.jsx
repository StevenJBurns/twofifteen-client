import React from 'react';
import Box from '@material-ui/core/Box';
import { Container, Hidden, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import { PageNav } from './PageNav/PageNav';

const useStyles = makeStyles({
  page: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    color: '#909090',
  },
  divider: {
    backgroundColor: '#909090',
  },
});

export const Page = props => {
  const classes = useStyles();

  return (
    <Container className={classes.page} maxWidth="lg">
      <PageHeader />
      <Hidden smDown>
        <PageNav />
      </Hidden>
      <Hidden mdUp>
        <Divider className={classes.divider} />
      </Hidden>
      <Box flex='1 0 auto' display="flex" flexDirection="column" py={2}>
        { props.children }
      </Box>
      <PageFooter />
    </Container>
  );
};
