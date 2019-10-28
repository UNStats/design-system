import React from 'react';
import { node, oneOf } from 'prop-types';
import { Box } from '@theme-ui/components';

// Styles are applied in the order in which they are defined.
// px can be overridden.
// mx cannot be overridden.
const Container = ({ maxWidth = 'default', children, ...props }) => (
  <Box
    px={[2, 3, 0]}
    {...props}
    sx={{
      width: '100%',
      maxWidth: `width.${maxWidth}`,
    }}
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
