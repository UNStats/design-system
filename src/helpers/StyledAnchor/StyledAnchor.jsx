import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledAnchor = ({ Anchor, children, display, href }) => {
  const Styled = styled(Anchor)`
    height: 100%;
    display: ${({ display: d }) => d};
    color: inherit;
    text-decoration: none;
    transition: all 0.2s ease-out;
    &:hover {
      opacity: 0.5;
      transition: all 0.2s ease-in;
    }
  `;
  return (
    <Styled display={display} href={href}>
      {children}
    </Styled>
  );
};

StyledAnchor.propTypes = {
  Anchor: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  display: PropTypes.oneOf(["block", "inline"]),
  href: PropTypes.string.isRequired
};

StyledAnchor.defaultProps = {
  display: "block"
};

export default StyledAnchor;
