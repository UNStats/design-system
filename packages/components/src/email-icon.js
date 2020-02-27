import React from 'react';
import { arrayOf, number, oneOfType, string } from 'prop-types';

import Icon from './icon';

const EmailIcon = ({ size, title, ...props }) => (
  <Icon {...props} size={size} aria-label="E-mail icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      width="100%"
      fill="currentColor"
      viewBox="0 0 14 10"
    >
      {title && <title>{title}</title>}
      <path d="M0 1V9C0 9.55 0.45 10 1 10H13C13.55 10 14 9.55 14 9V1C14 0.45 13.55 0 13 0H1C0.45 0 0 0.45 0 1ZM13 1L7 6L1 1H13ZM1 2.5L5 5.5L1 8.5V2.5ZM2 9L5.5 6L7 7.5L8.5 6L12 9H2ZM13 8.5L9 5.5L13 2.5V8.5Z" />
    </svg>
  </Icon>
);

EmailIcon.propTypes = {
  size: oneOfType([number, arrayOf(number)]),
  title: string,
};

export default EmailIcon;
