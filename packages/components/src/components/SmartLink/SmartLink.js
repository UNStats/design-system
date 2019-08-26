import React from 'react';
import { node, string } from 'prop-types';
import { withTheme } from 'styled-components';
import { Box, Link } from 'rebass';
import compareUrls from 'compare-urls';
import { themeType } from '../../types';

const SmartLink = ({ children, href, pathname, theme, ...props }) => {
  const internal = /^\/(?!\/)/.test(href);
  if (internal) {
    // Do not link children if provided pathname matches href.
    if (pathname && compareUrls(pathname, href)) {
      return <Box {...props}>{children}</Box>;
    }
    return (
      <Link {...props} as={theme.internalLink} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <Link {...props} as={theme.externalLink} href={href}>
      {children}
    </Link>
  );
};

SmartLink.propTypes = {
  children: node.isRequired,
  href: string.isRequired,
  pathname: string,
  theme: themeType.isRequired,
};

export default withTheme(SmartLink);
