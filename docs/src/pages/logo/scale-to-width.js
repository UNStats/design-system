import React from 'react';
import { Box, ThemeProvider } from 'theme-ui';
import preset from '@theme-ui/preset-base';
import { Logo } from '@undataforum/assets';

const ScaleToWidth = () => (
  <ThemeProvider theme={preset}>
    <Box sx={{ width: 128, m: 2 }}>
      <Logo scaleTo="width" />
    </Box>
  </ThemeProvider>
);

export default ScaleToWidth;
