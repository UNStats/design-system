import React from 'react';
import { Box, Container, Grid, ThemeProvider } from 'theme-ui';
import preset from '@theme-ui/preset-base';
import { Video } from '@undataforum/components';

const GridOfVideos = () => (
  <ThemeProvider theme={preset}>
    <Box sx={{ m: 2 }}>
      <Container sx={{ maxWidth: '64rem' }}>
        <Grid gap={4} columns={[1, null, 2]}>
          <Video id="aPLNGcIq6rU" title="Title for iframe" />
          <Video id="zGF0A6rmcRA" title="Title for iframe" />
          <Video id="aQqoG3BNcrA" title="Title for iframe" />
          <Video id="sMbNKRyFAMY" title="Title for iframe" />
        </Grid>
      </Container>
    </Box>
  </ThemeProvider>
);

export default GridOfVideos;
