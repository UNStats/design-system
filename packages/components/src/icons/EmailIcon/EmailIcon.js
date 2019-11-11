import React from 'react';

import { scaleToType } from '../../types';

const EmailIcon = ({ scaleTo }) => {
  const height = scaleTo === 'height' ? '100%' : null;
  const width = scaleTo === 'width' ? '100%' : null;
  return (
    <svg viewBox="0 0 14 10" height={height} width={width} fill="currentColor">
      <desc>Email icon</desc>
      <path d="M0 1V9C0 9.55 0.45 10 1 10H13C13.55 10 14 9.55 14 9V1C14 0.45 13.55 0 13 0H1C0.45 0 0 0.45 0 1ZM13 1L7 6L1 1H13ZM1 2.5L5 5.5L1 8.5V2.5ZM2 9L5.5 6L7 7.5L8.5 6L12 9H2ZM13 8.5L9 5.5L13 2.5V8.5Z" />
    </svg>
  );
};

EmailIcon.propTypes = {
  scaleTo: scaleToType.isRequired,
};

export default EmailIcon;
