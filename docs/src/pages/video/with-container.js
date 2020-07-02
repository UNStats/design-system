import React from 'react';
import { Box, Container, ThemeProvider } from 'theme-ui';
import preset from '@theme-ui/preset-base';
import { Video } from '@undataforum/components';

const WithContainer = () => (
  <ThemeProvider theme={preset}>
    <Box sx={{ m: 2 }}>
      <Container sx={{ maxWidth: '48rem' }}>
        <Video
          id="sMbNKRyFAMY"
          title="This title is passed through to the iframe and is required for accessibility."
        />
      </Container>
    </Box>
  </ThemeProvider>
);

export default WithContainer;
