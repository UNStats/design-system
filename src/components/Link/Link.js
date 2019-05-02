import React from 'react';
import { node, string } from 'prop-types';
import { withTheme } from 'styled-components';
import { Link as RebassLink } from 'rebass';
import { themeType } from '../../types';

const Link = ({ children, href, theme, ...props }) => {
  const internal = /^\/(?!\/)/.test(href);
  if (internal) {
    return (
      <RebassLink {...props} as={theme.internalLink} href={href}>
        {children}
      </RebassLink>
    );
  }
  return (
    <RebassLink {...props} as={theme.externalLink} href={href}>
      {children}
    </RebassLink>
  );
};

Link.propTypes = {
  children: node.isRequired,
  href: string.isRequired,
  theme: themeType.isRequired,
};

export default withTheme(Link);
