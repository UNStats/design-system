import React from 'react';
import { Text } from 'rebass';
import { border } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { withTheme } from 'styled-components';
import SmartLink from '../SmartLink';
import { linkType, modeType } from '../../types';

const Badge = ({ link, mode, ...props }) => (
  <SmartLink {...props} css="display: inline-block;" href={link.href}>
    <Text
      css={`
        ${border}
        display: inline-block;
      `}
      color={themeGet(`colors.modes.${mode}.text`)(props)}
      bg={themeGet(`colors.modes.${mode}.background`)(props)}
      borderRadius="pill"
      fontFamily="body"
      fontSize={0}
      fontWeight="bold"
      px={2}
      py={1}
    >
      {link.text}
    </Text>
  </SmartLink>
);

Badge.propTypes = {
  link: linkType.isRequired,
  mode: modeType,
};

Badge.defaultProps = {
  mode: 'primary',
};

export default withTheme(Badge);
