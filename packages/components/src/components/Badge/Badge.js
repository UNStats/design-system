import React from 'react';
import { string, node } from 'prop-types';
import { Badge as ThemeUiBadge } from '@theme-ui/components';

// Badge is a helper component and not exported.
const Badge = ({ children, color, bg, ...props }) => (
  <ThemeUiBadge {...props} sx={{ color, bg }}>
    {children}
  </ThemeUiBadge>
);

Badge.propTypes = {
  children: node.isRequired,
  color: string.isRequired,
  bg: string.isRequired,
};

export default Badge;
