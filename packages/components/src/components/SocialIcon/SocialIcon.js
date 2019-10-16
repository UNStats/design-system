import React from 'react';
import { func, string } from 'prop-types';
import SmartLink from '../SmartLink';
import { colorType } from '../../types';

const SocialIcon = ({ color = 'text', href, render, ...props }) => (
  <SmartLink
    {...props}
    css={{ display: 'inline-block' }}
    color={color}
    href={href}
  >
    {render()}
  </SmartLink>
);

SocialIcon.propTypes = {
  color: colorType,
  href: string.isRequired,
  render: func.isRequired,
};

export default SocialIcon;
