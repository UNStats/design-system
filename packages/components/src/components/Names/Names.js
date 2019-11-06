import React from 'react';
import { arrayOf, oneOf, string } from 'prop-types';
import { Text } from '@theme-ui/components';

export const variants = ['default', 'bold'];
export const variantType = oneOf(variants);

const Names = ({ values, variant = 'body', ...props }) => (
  <Text
    as="div"
    {...props}
    sx={{ fontFamily: 'body', lineHeight: 'body' }}
    variant={`names.${variant}`}
  >
    {values.join(', ')}
  </Text>
);

Names.propTypes = {
  values: arrayOf(string).isRequired,
  variant: variantType,
};

export default Names;
