import React from 'react';
import { func, string } from 'prop-types';
import SmartLink from '../SmartLink';

const SocialIcon = ({ color, href, render, ...props }) => (
  <SmartLink
    {...props}
    css={`
      display: inline-block;
    `}
    color={color}
    href={href}
  >
    {render()}
  </SmartLink>
);

SocialIcon.propTypes = {
  color: string,
  href: string.isRequired,
  render: func.isRequired,
};

export default SocialIcon;
