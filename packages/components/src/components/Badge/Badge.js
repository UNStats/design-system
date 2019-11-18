import React from 'react';
import { oneOf, shape, string } from 'prop-types';
import { Text } from '@theme-ui/components';

const Badge = ({ value: { text, variant = 'primary' }, ...props }) => (
  <Text
    {...props}
    sx={{
      display: 'inline-block',
      borderRadius: 'circle',
      fontFamily: 'body',
      fontSize: 0,
      fontWeight: 'bold',
      variant: `pairings.${variant}`,
      px: 2,
      py: 1,
    }}
  >
    {text}
  </Text>
);

export const variants = ['primary', 'secondary', 'accent', 'inverse'];
const variantType = oneOf(variants);

export const badgeType = shape({
  text: string.isRequired,
  variant: variantType,
});

Badge.propTypes = {
  value: badgeType,
};

export default Badge;
