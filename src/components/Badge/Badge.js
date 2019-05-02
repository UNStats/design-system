import React from 'react';
import { string } from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { borderRadius } from 'styled-system';
import { Text } from 'rebass';
import { badgeType, colorType, themeType } from '../../types';
import Link from '../Link';

const Pill = styled(Text)(borderRadius);

const UnlinkedBadge = ({ color, text, theme, ...props }) => (
  <Pill
    {...props}
    css="display: inline-block;"
    borderRadius="pill"
    {...theme.colorSchemes[color]}
    fontFamily="sans"
    fontSize={0}
    fontWeight="bold"
    px={2}
    py={1}
  >
    {text}
  </Pill>
);

UnlinkedBadge.propTypes = {
  color: colorType,
  text: string.isRequired,
  theme: themeType.isRequired,
};

UnlinkedBadge.defaultProps = {
  color: 'primary',
};

const Badge = ({ badge, theme, ...props }) => {
  if (badge.href) {
    return (
      <Link {...props} href={badge.href}>
        <UnlinkedBadge color={badge.color} text={badge.text} theme={theme} />
      </Link>
    );
  }
  return (
    <UnlinkedBadge
      {...props}
      color={badge.color}
      text={badge.text}
      theme={theme}
    />
  );
};

Badge.propTypes = {
  badge: badgeType.isRequired,
  theme: themeType.isRequired,
};

export default withTheme(Badge);
