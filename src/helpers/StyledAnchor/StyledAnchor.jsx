import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color as colorUtility } from "styled-system";
import DefaultAnchor from "../../components/DefaultAnchor";
import { colors } from "../../theme";

const StyledAnchor = ({ Anchor, children, color, display, href }) => {
  const Styled = styled(Anchor)`
    display: ${({ display: d }) => d};
    ${colorUtility};
    height: 100%;
    text-decoration: none;
    transition: all 0.2s ease-out;
    &:hover {
      opacity: 0.5;
      transition: all 0.2s ease-in;
    }
  `;
  return (
    <Styled color={color} display={display} href={href}>
      {children}
    </Styled>
  );
};

StyledAnchor.propTypes = {
  Anchor: PropTypes.func,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(Object.keys(colors)),
  display: PropTypes.oneOf(["block", "inline"]),
  href: PropTypes.string.isRequired
};

StyledAnchor.defaultProps = {
  Anchor: DefaultAnchor,
  color: "primary",
  /** Sets width to 100% and ensures that large clickable areas work. */
  display: "inline"
};

export default StyledAnchor;
