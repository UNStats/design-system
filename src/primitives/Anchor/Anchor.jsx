import React from "react";
import PropTypes from "prop-types";

const Anchor = ({ children, className, href }) => (
  <a className={className} href={href}>
    {children}
  </a>
);

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired
};

Anchor.defaultProps = {
  className: ""
};

export default Anchor;
