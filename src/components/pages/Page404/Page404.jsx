import React from 'react';
import { Box } from '@material-ui/core';
import { Page } from 'components/pages/Page/Page';

export const Page404 = () => {
  return (
    <Page>
      <Box flexGrow="1" display='flex' flexDirection="column" alignItems="center" justifyContent="center">
        <h1>404 &bull; Not Found</h1>
      </Box>
    </Page>
  );
};
