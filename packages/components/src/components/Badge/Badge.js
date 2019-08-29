import React from 'react';
import { string } from 'prop-types';
import { Text } from 'rebass';
import { border } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { withTheme } from 'styled-components';
import SmartLink from '../SmartLink';
import { modeType } from '../../types';

const UnlinkedBadge = ({ children, color, bg, ...props }) => (
  <Text
    {...props}
    css={`
      ${border}
      display: inline-block;
    `}
    color={color}
    bg={bg}
    borderRadius="pill"
    fontFamily="body"
    fontSize={0}
    fontWeight="bold"
    px={2}
    py={1}
  >
    {children}
  </Text>
);

UnlinkedBadge.propTypes = {
  children: string.isRequired,
  color: string.isRequired,
  bg: string.isRequired,
};

const Badge = ({ children, href, mode, ...props }) => {
  const color = themeGet(`colors.modes.${mode}.text`)(props);
  const bg = themeGet(`colors.modes.${mode}.background`)(props);
  if (href) {
    return (
      <SmartLink {...props} css="display: inline-block;" href={href}>
        <UnlinkedBadge color={color} bg={bg}>
          {children}
        </UnlinkedBadge>
      </SmartLink>
    );
  }

  return (
    <UnlinkedBadge {...props} color={color} bg={bg}>
      {children}
    </UnlinkedBadge>
  );
};

Badge.propTypes = {
  children: string.isRequired,
  href: string,
  mode: modeType,
};

Badge.defaultProps = {
  mode: 'primary',
};

export default withTheme(Badge);
