import React from 'react';
import { node, string } from 'prop-types';
import { Box } from 'theme-ui';

const ColorCard = ({
  color = 'primary',
  title,
  subtitle,
  children,
  ...props
}) => (
  <Box {...props} sx={{ border: '1px solid', borderColor: color }}>
    <Box sx={{ p: [2, 3], mb: [2, 3] }} variant={`pairings.${color}`}>
      {title}
      {subtitle && subtitle}
    </Box>
    <Box sx={{ px: [2, 3], mb: [2, 3] }}>{children}</Box>
  </Box>
);

ColorCard.propTypes = {
  color: string,
  // Bring your own heading (based on the context this is rendered in).
  title: node.isRequired,
  subtitle: node,
  children: node.isRequired,
};

export default ColorCard;
