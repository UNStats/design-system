import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import { borderRadius } from "styled-system";
import { Link, Text } from "rebass";
import { badgeType, colorType, themeType } from "../types";

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
  text: PropTypes.string.isRequired,
  theme: themeType.isRequired
};

UnlinkedBadge.defaultProps = {
  color: "primary"
};

const Badge = ({ badge, theme, ...props }) => {
  if (badge.href) {
    return (
      <Link
        {...props}
        as={theme.internalLink}
        href={badge.href}
        key={badge.href}
      >
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
  theme: themeType.isRequired
};

export default withTheme(Badge);
