import React from 'react';
import { node, oneOf, string } from 'prop-types';
import { Link } from '@theme-ui/components';
import { withTheme } from 'emotion-theming';
import { themeType } from '../../types';

const variants = ['branded', 'transparent', 'primary', 'secondary', 'inverse'];
const variantType = oneOf(variants);

// Default color is primary (inherited from Link).
const SmartLink = ({
  children,
  href,
  variant = 'default',
  theme,
  ...props
}) => {
  const internal = /^\/(?!\/)/.test(href);
  if (internal) {
    return (
      <Link {...props} as={theme.link.internal} href={href} variant={variant}>
        {children}
      </Link>
    );
  }
  return (
    <Link {...props} as={theme.link.external} href={href} variant={variant}>
      {children}
    </Link>
  );
};

SmartLink.propTypes = {
  children: node.isRequired,
  href: string.isRequired,
  variant: variantType,
  theme: themeType.isRequired,
};

export default withTheme(SmartLink);
