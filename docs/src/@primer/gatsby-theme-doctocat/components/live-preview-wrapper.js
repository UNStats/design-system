import React from 'react';
import { node } from 'prop-types';
import { Box, ThemeProvider } from 'theme-ui';
import preset from '@undataforum/preset';

// No need to wrap with ThemeProvider since we already use gatsby-plugin-theme-ui.
const LivePreviewWrapper = ({ children }) => (
  <ThemeProvider theme={preset}>
    <Box sx={{ m: 2 }}>{children}</Box>
  </ThemeProvider>
);

LivePreviewWrapper.propTypes = {
  children: node.isRequired,
};

export default LivePreviewWrapper;
