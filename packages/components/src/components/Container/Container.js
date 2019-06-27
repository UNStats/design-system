import React from 'react';
import { node, number } from 'prop-types';
import { layout } from 'styled-system';
import { Box } from 'rebass';

const Container = ({ children, maxWidth, ...props }) => (
  <Box
    {...props}
    css={`
      ${layout}
      width: 100%;
    `}
    maxWidth={maxWidth}
    mx="auto"
  >
    {children}
  </Box>
);

Container.propTypes = {
  children: node.isRequired,
  maxWidth: number.isRequired,
};

export default Container;
