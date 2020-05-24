import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
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
});

export const Page = props => {
  const styles = useStyles();

  return (
    <Container className={styles.page} maxWidth="lg">
      <PageHeader />
      <PageNav />
      <Box flex='1 0 auto' display="flex" flexDirection="column" py={2}>
        { props.children }
      </Box>
      <PageFooter />
    </Container>
  );
};
