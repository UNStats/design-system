import React from 'react';
import { node, string } from 'prop-types';

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
  children: node.isRequired,
  href: string.isRequired,
  className: string,
};

export default NewTabLink;
