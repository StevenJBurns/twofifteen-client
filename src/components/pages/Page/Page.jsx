import React from 'react';
import PropTypes from 'prop-types';
import { makesStyles, makeStyles } from '@material-ui/styles';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import { PageNav } from './PageNav';

const useStyles = makeStyles({
  root: {
    color: 'white',
    flex: '1 0 auto',
  },
});

export const Page = props => {
  const styles = useStyles();

  return (
    <>
      <PageHeader />
      <PageNav />
      <main className={styles.root}>
        { props.children }
      </main>
      <PageFooter />
    </>
  );
};

export default Page;