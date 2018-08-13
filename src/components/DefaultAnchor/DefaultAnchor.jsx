import React from "react";
import PropTypes from "prop-types";

const DefaultAnchor = ({ children, className, href }) => (
  <a className={className} href={href}>
    {children}
  </a>
);

DefaultAnchor.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired
};

DefaultAnchor.defaultProps = {
  className: ""
};

export default DefaultAnchor;
