import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fontFamily, fontSize, fontWeight, space } from "styled-system";
import Anchor from "../Anchor/Anchor";
import Link from "../Link";
import { colors } from "../../theme";

const Wrapper = styled.div`
  display: inline-block;
  ${space};
`;

const Pill = styled.div`
  border-radius: 9999px;
  color: ${({ theme, color }) => theme.colors[theme.colorSchemes[color].color]};
  background-color: ${({ theme, color }) =>
    theme.colors[theme.colorSchemes[color].bgColor]};
  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${space};
`;

const Badge = ({ Anchor: A, href, color, children, ...props }) => (
  <Wrapper {...props}>
    <Link Anchor={A} display="block" href={href}>
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
  </Wrapper>
);

Badge.propTypes = {
  Anchor: PropTypes.func,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(Object.keys(colors)),
  href: PropTypes.string.isRequired
};

Badge.defaultProps = {
  Anchor,
  color: "primary"
};

export default Badge;
