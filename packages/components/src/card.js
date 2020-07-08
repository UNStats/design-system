import React from 'react';
import { node, string } from 'prop-types';
import { Box } from 'theme-ui';

// Needs to work with background color as text.
const Card = ({ color = 'primary', title, subtitle, children, ...props }) => (
  <Box {...props} sx={{ border: '1px solid', borderColor: color }}>
    <Box sx={{ color: 'background', bg: color, p: [2, 3], mb: [2, 3] }}>
      {title}
      {subtitle && subtitle}
    </Box>
    <Box sx={{ px: [2, 3], mb: [2, 3] }}>{children}</Box>
  </Box>
);

Card.propTypes = {
  color: string,
  title: node.isRequired,
  subtitle: node,
  children: node.isRequired,
};

export default Card;
