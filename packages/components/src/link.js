import React from 'react';
import { node, string } from 'prop-types';
import { Link as ThemeUiLink, Text, useThemeUI } from 'theme-ui';

// If href is omitted, link is disabled.
// This is useful to dynamically disable links in navigations.
const Link = ({ children, href, label, ...props }) => {
  // Call hook before early return.
  const { theme } = useThemeUI();

  // Render as text with inherited color when no href is provided.
  if (!href) {
    return <Text as="span">{children}</Text>;
  }

  let internal;
  // If href links to PDF, reat as external link.
  if (href.endsWith('.pdf')) {
    internal = false;
  } else {
    internal = /^\/(?!\/)/.test(href);
  }
  const link = internal ? theme.link.internal : theme.link.external;
  return (
    <ThemeUiLink {...props} as={link} href={href} aria-label={label}>
      {children}
    </ThemeUiLink>
  );
};

Link.propTypes = {
  children: node.isRequired,
  href: string,
  label: string,
};

export default Link;
