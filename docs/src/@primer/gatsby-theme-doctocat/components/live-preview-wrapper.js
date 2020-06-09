import React from 'react';
import { node } from 'prop-types';
import { Box } from 'theme-ui';

// No need to wrap with ThemeProvider since we already use gatsby-plugin-theme-ui.
const LivePreviewWrapper = ({ children }) => (
  <Box sx={{ m: 2 }}>{children}</Box>
);

LivePreviewWrapper.propTypes = {
  children: node.isRequired,
};

export default LivePreviewWrapper;
