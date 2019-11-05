import React from 'react';
import { func, oneOf, string } from 'prop-types';

import SmartLink from '../SmartLink';

const SocialIcon = ({ render, href, variant = 'branded', ...props }) => (
  <SmartLink
    {...props}
    css={{ display: 'inline-block' }}
    href={href}
    variant={variant}
  >
    {render()}
  </SmartLink>
);

export const variants = [
  'branded',
  'transparent',
  'primary',
  'secondary',
  'inverse',
];

const variantType = oneOf(variants);

SocialIcon.propTypes = {
  render: func.isRequired,
  href: string.isRequired,
  variant: variantType,
};

export default SocialIcon;
