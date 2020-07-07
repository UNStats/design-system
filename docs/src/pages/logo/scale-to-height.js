import React from 'react';
import { Box, ThemeProvider } from 'theme-ui';
import preset from '@theme-ui/preset-base';
import { Logo } from '@undataforum/assets';

const ScaleToHeight = () => (
  <ThemeProvider theme={preset}>
    <Box sx={{ height: 128, m: 2 }}>
      <Logo scaleTo="height" />
    </Box>
  </ThemeProvider>
);

export default ScaleToHeight;
