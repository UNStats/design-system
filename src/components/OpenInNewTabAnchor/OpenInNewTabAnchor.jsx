import React from "react";
import PropTypes from "prop-types";

const OpenInNewTabAnchor = ({ className, children, href }) => (
  <a
    className={className}
    href={href}
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
  </a>
);

OpenInNewTabAnchor.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
};

OpenInNewTabAnchor.defaultProps = {
  className: ""
};

export default OpenInNewTabAnchor;
