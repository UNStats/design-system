import React from 'react';
import { node, oneOf, string } from 'prop-types';
import { Box } from '@theme-ui/components';

// A Container is used as the outer most element in a layout.
// Padding can be overridden.
const Container = ({ children, maxWidth = 'default', variant, ...props }) => (
  <Box
    p={[2, 3, 4]}
    {...props}
    sx={{
      maxWidth: `width.${maxWidth}`,
      width: '100%',
      mx: 'auto',
      variant,
    }}
  >
    {children}
  </Box>
);

Container.propTypes = {
  children: node.isRequired,
  maxWidth: oneOf(['narrow', 'default', 'wide']),
  variant: string,
};

export default Container;
