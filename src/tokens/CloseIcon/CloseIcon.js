import React from 'react';
import { Box } from 'rebass';
import { responsiveType } from '../../types';

const CloseIcon = ({ width, ...props }) => (
  <Box
    {...props}
    as="svg"
    css="
      vertical-align: middle;
      display: inline-block;
    "
    viewBox="0 0 12 16"
    width={width}
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
    />
  </Box>
);

CloseIcon.propTypes = {
  width: responsiveType.isRequired,
};

export default CloseIcon;
