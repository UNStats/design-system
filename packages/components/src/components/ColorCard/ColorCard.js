import React from 'react';
import { string, func } from 'prop-types';
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
      {title()}
    </Box>
    <Box sx={{ px: [2, 3], mb: [2, 3] }}>
      {subtitle && subtitle()}
      {children()}
    </Box>
  </Box>
);

ColorCard.propTypes = {
  color: string,
  // Bring your own heading (based on the context this is rendered in).
  title: func.isRequired,
  subtitle: func,
  children: func.isRequired,
};

export default ColorCard;
