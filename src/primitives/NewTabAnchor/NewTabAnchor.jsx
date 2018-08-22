import React from "react";
import PropTypes from "prop-types";

const NewTabAnchor = ({ className, children, href }) => (
  <a
    className={className}
    href={href}
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
  </a>
);

NewTabAnchor.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
};

NewTabAnchor.defaultProps = {
  className: ""
};

export default NewTabAnchor;
