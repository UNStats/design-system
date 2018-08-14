import React from "react";
import PropTypes from "prop-types";
import OpenInNewTabAnchor from "../../components/OpenInNewTabAnchor";
import StyledAnchor from "../../helpers/StyledAnchor";

const A = ({ href, children, color }) => (
  <StyledAnchor Anchor={OpenInNewTabAnchor} color={color} href={href}>
    {children}
  </StyledAnchor>
);

A.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  href: PropTypes.string.isRequired
};

A.defaultProps = {
  color: "primary"
};

export default A;
