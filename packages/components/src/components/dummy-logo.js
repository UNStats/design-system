import React from 'react';

import { scaleToType } from '../types';

const DummyLogo = ({ scaleTo }) => {
  const height = scaleTo === 'height' ? '100%' : null;
  const width = scaleTo === 'width' ? '100%' : null;
  return (
    <svg viewBox="0 0 42 42" height={height} width={width} fill="currentColor">
      <desc>Dummy logo</desc>
      <path d="M42 21C42 32.598 32.598 42 21 42C9.40202 42 0 32.598 0 21C0 9.40202 9.40202 0 21 0C32.598 0 42 9.40202 42 21Z" />
    </svg>
  );
};

DummyLogo.propTypes = {
  scaleTo: scaleToType.isRequired,
};

export default DummyLogo;
