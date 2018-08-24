import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, display, space } from "styled-system";
import Anchor from "../Anchor/Anchor";
import { colors } from "../../theme";

const Link = ({
  Anchor: A,
  children,
  color: c,
  display: d,
  href,
  ...props
}) => {
  const StyledAnchor = styled(A)`
    ${color};
    ${display};
    ${space};
    height: 100%;
    text-decoration: none;
    transition: all 0.2s ease-out;
    &:hover {
      opacity: 0.5;
      transition: all 0.2s ease-in;
    }
  `;
  return (
    <StyledAnchor color={c} display={d} href={href} {...props}>
      {children}
    </StyledAnchor>
  );
};

Link.propTypes = {
  Anchor: PropTypes.func,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(Object.keys(colors)),
  display: PropTypes.oneOf(["block", "inline", "inline-block"]),
  href: PropTypes.string.isRequired
};

Link.defaultProps = {
  Anchor,
  color: "primary",
  display: "inline"
};

export default Link;
