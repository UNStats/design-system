import React from 'react';
import { node, oneOf } from 'prop-types';
import { Box } from 'rebass';

const Container = ({ maxWidth = 'default', children, ...props }) => (
  <Box
    px={[2, 3, 0]}
    {...props}
    css={{ width: '100%' }}
    maxWidth={`width.${maxWidth}`}
    mx="auto"
  >
    {children}
  </Box>
);

Container.propTypes = {
  maxWidth: oneOf(['narrow', 'default', 'wide']),
  children: node.isRequired,
};

export default Container;
