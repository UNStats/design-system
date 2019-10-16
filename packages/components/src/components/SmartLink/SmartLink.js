import React from 'react';
import { node, string } from 'prop-types';
import { Link } from 'rebass';
import { withTheme } from 'emotion-theming';
import { colorType, themeType } from '../../types';

// Default color is primary (inherited from Link).
const SmartLink = ({ children, color, href, theme, ...props }) => {
  const internal = /^\/(?!\/)/.test(href);
  if (internal) {
    return (
      <Link {...props} as={theme.links.internal} color={color} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <Link {...props} as={theme.links.external} color={color} href={href}>
      {children}
    </Link>
  );
};

SmartLink.propTypes = {
  children: node.isRequired,
  color: colorType,
  href: string.isRequired,
  theme: themeType.isRequired,
};

export default withTheme(SmartLink);
