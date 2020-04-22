import React from 'react';
import { arrayOf, number, oneOfType } from 'prop-types';
import { Box } from 'theme-ui';

const Icon = ({ size = 32, ...props }) => (
  <Box
    {...props}
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      color: 'inherit',
      bg: 'transparent',
    }}
  />
);

Icon.propTypes = {
  size: oneOfType([number, arrayOf(number)]),
};

export default Icon;
