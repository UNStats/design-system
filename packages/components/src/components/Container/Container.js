import React from 'react';
import { node, oneOf, string } from 'prop-types';
import { Box } from '@theme-ui/components';

/* A Container is used as the outer most element in layouts.
 * The default padding is for page layouts:
 * - no top padding,
 * - left and right padding (to keep a distance form edge of screen on phones and tablets),
 * - larger bottom padding (to keep a distance from footer).
 * Padding can be overridden.
 */
const Container = ({ children, maxWidth = 'default', variant, ...props }) => (
  <Box
    pt={0}
    pb={[3, 4, 5]}
    px={[2, 3, 4]}
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
