import React from 'react';
import { node } from 'prop-types';
import { Box, ThemeProvider } from 'theme-ui';
import preset from '@theme-ui/preset-base';

const LivePreviewWrapper = ({ children }) => (
  <ThemeProvider theme={preset}>
    <Box sx={{ width: '100%' }}>{children}</Box>{' '}
  </ThemeProvider>
);

LivePreviewWrapper.propTypes = {
  children: node.isRequired,
};

export default LivePreviewWrapper;
