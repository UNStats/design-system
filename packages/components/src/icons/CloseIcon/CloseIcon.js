import React from 'react';

import { scaleToType } from '../../types';

const CloseIcon = ({ scaleTo }) => {
  const height = scaleTo === 'height' ? '100%' : null;
  const width = scaleTo === 'width' ? '100%' : null;
  return (
    <svg viewBox="0 0 12 12" height={height} width={width} fill="currentColor">
      <desc>Close icon</desc>
      <path d="M7.48 5.99999L11.23 9.74999L9.75 11.23L6 7.47999L2.25 11.23L0.770004 9.74999L4.52 5.99999L0.770004 2.24999L2.25 0.769989L6 4.51999L9.75 0.769989L11.23 2.24999L7.48 5.99999Z" />
    </svg>
  );
};

CloseIcon.propTypes = {
  scaleTo: scaleToType.isRequired,
};

export default CloseIcon;
