import React from 'react';
import { node, oneOf } from 'prop-types';
import { Box } from '@theme-ui/components';

// Styles are applied in the following order: variant, sx, css, styled-system.
// Use styled-system mx to prevent it from being overridden.
const Container = ({ maxWidth = 'default', children, ...props }) => (
  <Box
    {...props}
    sx={{
      width: '100%',
      maxWidth: `width.${maxWidth}`,
      px: [2, 3, 0],
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
