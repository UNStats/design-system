import React from 'react';
import { node } from 'prop-types';
import { ThemeProvider } from 'theme-ui';
import preset from '@theme-ui/preset-base';

const LivePreviewWrapper = ({ children }) => (
  <ThemeProvider theme={preset}>{children}</ThemeProvider>
);

LivePreviewWrapper.propTypes = {
  children: node.isRequired,
};

export default LivePreviewWrapper;
