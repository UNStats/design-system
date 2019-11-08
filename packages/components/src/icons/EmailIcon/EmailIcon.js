import React from 'react';
import { Box } from '@theme-ui/components';

import { responsiveType } from '../../types';

const EmailIcon = ({ width, ...props }) => (
  <Box
    {...props}
    sx={{
      verticalAlign: 'middle',
      display: 'inline-block',
      width,
    }}
  >
    <svg viewBox="0 0 14 16" width="100%" fill="currentColor" role="img">
      <desc>Email icon</desc>
      <path d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z" />
    </svg>
  </Box>
);

EmailIcon.propTypes = {
  width: responsiveType.isRequired,
};

export default EmailIcon;
