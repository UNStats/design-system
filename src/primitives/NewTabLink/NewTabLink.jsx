import React from "react";
import PropTypes from "prop-types";

const NewTabLink = ({ children, href, className }) => (
  <a
    className={className}
    href={href}
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
  </a>
);

NewTabLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string
};

NewTabLink.defaultProps = {
  className: ""
};

export default NewTabLink;
