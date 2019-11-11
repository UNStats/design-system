import React from 'react';

import { scaleToType } from '../../types';

const MenuIcon = ({ scaleTo }) => {
  const height = scaleTo === 'height' ? '100%' : null;
  const width = scaleTo === 'width' ? '100%' : null;
  return (
    <svg viewBox="0 0 12 10" height={height} width={width} fill="currentColor">
      <title>Menu icon</title>
      <path d="M11.41 6H0.59C0 6 0 5.59 0 5C0 4.41 0 4 0.59 4H11.4C11.99 4 11.99 4.41 11.99 5C11.99 5.59 11.99 6 11.4 6H11.41ZM11.41 2H0.59C0 2 0 1.59 0 1C0 0.41 0 0 0.59 0H11.4C11.99 0 11.99 0.41 11.99 1C11.99 1.59 11.99 2 11.4 2H11.41ZM0.59 8H11.4C11.99 8 11.99 8.41 11.99 9C11.99 9.59 11.99 10 11.4 10H0.59C0 10 0 9.59 0 9C0 8.41 0 8 0.59 8Z" />
    </svg>
  );
};

MenuIcon.propTypes = {
  scaleTo: scaleToType.isRequired,
};

export default MenuIcon;
