import React from 'react';
import { node, number } from 'prop-types';
import { maxWidth } from 'styled-system';
import { Box } from 'rebass';

const Container = ({ children, maxWidth: width, ...props }) => (
  <Box
    {...props}
    css={`
      ${maxWidth}
    `}
    maxWidth={width}
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
