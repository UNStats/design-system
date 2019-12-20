import React from 'react';
import { node, oneOf, shape, string } from 'prop-types';
import { Link } from '@theme-ui/components';
import { useThemeUI } from 'theme-ui';

// Default color is primary (inherited from Link).
const SmartLink = ({
  children,
  href,
  label,
  variant = 'branded',
  ...props
}) => {
  const internal = /^\/(?!\/)/.test(href);
  const { theme } = useThemeUI();
  if (internal) {
    return (
      <Link
        {...props}
        as={theme.link.internal}
        href={href}
        aria-label={label}
        variant={variant}
      >
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

export const variants = [
  'branded',
  'transparent',
  'primary',
  'secondary',
  'inverse',
];

const variantType = oneOf(variants);

export const linkType = shape({
  text: string.isRequired,
  href: string.isRequired,
  label: string,
});

SmartLink.propTypes = {
  children: node.isRequired,
  href: string.isRequired,
  label: string,
  variant: variantType,
};

export default SmartLink;
