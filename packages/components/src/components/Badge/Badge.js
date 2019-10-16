import React from 'react';
import { string, oneOf } from 'prop-types';
import { Text } from 'rebass';

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
      px: 2,
      py: 1,
    }}
    variant={`badge.${variant}`}
  >
    {text}
  </Text>
);

Badge.propTypes = {
  text: string.isRequired,
  variant: variantType,
};

export default Badge;
