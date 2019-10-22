import React from 'react';
import { string, oneOf } from 'prop-types';
import { Text } from '@theme-ui/components';

export const variants = ['primary', 'secondary', 'accent', 'inverse'];
export const variantType = oneOf(variants);

const Badge = ({ text, variant = 'primary', ...props }) => (
  <Text
    {...props}
    sx={{
      display: 'inline-block',
      borderRadius: 'circle',
      fontFamily: 'body',
      fontSize: 0,
      fontWeight: 'bold',
      variant: `badge.${variant}`,
      px: 2,
      py: 1,
    }}
  >
    {text}
  </Text>
);

Badge.propTypes = {
  text: string.isRequired,
  variant: variantType,
};

export default Badge;
