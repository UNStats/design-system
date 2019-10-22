import React from 'react';
import { Box } from '@theme-ui/components';
import { responsiveType } from '../../types';

const CloseIcon = ({ width, ...props }) => (
  <Box
    {...props}
    sx={{
      verticalAlign: 'middle',
      display: 'inline-block',
      width,
    }}
  >
    <svg viewBox="0 0 12 16" width="100%" fill="currentColor" role="img">
      <title>Close icon</title>
      <path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z" />
    </svg>
  </Box>
);

CloseIcon.propTypes = {
  width: responsiveType.isRequired,
};

export default CloseIcon;
