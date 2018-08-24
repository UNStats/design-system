import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Anchor from "../Anchor/Anchor";
import Link from "../Link";
import Text from "../Text";
import { colors } from "../../theme";

const Pill = styled(Text.span)`
  display: inline-block;
  border-radius: 9999px;
  color: ${({ theme, color }) => theme.colors[theme.colorSchemes[color].color]};
  background-color: ${({ theme, color }) =>
    theme.colors[theme.colorSchemes[color].bgColor]};
`;

const Badge = ({ Anchor: A, href, color, children, ...props }) => (
  <Link Anchor={A} display="inline-block" href={href} {...props}>
    <Pill
      color={color}
      fontFamily="sansSerif"
      fontSize={7}
      fontWeight="bold"
      px={2}
      py={1}
    >
      {children}
    </Pill>
  </Link>
);

Badge.propTypes = {
  Anchor: PropTypes.func,
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(Object.keys(colors)),
  href: PropTypes.string.isRequired
};

Badge.defaultProps = {
  Anchor,
  color: "primary"
};

export default Badge;
