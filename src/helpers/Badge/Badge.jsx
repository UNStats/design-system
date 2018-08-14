import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fontSize, space } from "styled-system";
import DefaultAnchor from "../../components/DefaultAnchor";
import StyledAnchor from "../StyledAnchor";
import { colors } from "../../theme";

const Wrapper = styled.div`
  display: inline-block;
  ${space};
`;

const Pill = styled.div`
  border-radius: 9999px;
  font-weight: bold;
  color: ${({ theme, color }) => theme.colors[theme.colorSchemes[color].color]};
  background-color: ${({ theme, color }) =>
    theme.colors[theme.colorSchemes[color].bgColor]};
  ${fontSize};
  ${space};
`;

const Badge = ({ Anchor, href, color, children, ...props }) => (
  <Wrapper {...props}>
    <StyledAnchor Anchor={Anchor} display="block" href={href}>
      <Pill color={color} fontSize={7} px={2} py={1}>
        {children}
      </Pill>
    </StyledAnchor>
  </Wrapper>
);

Badge.propTypes = {
  Anchor: PropTypes.func,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(Object.keys(colors)),
  href: PropTypes.string.isRequired
};

Badge.defaultProps = {
  Anchor: DefaultAnchor,
  color: "primary"
};

export default Badge;
