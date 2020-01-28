import React from 'react';
import { arrayOf, oneOf, oneOfType, string } from 'prop-types';
import { Text } from 'theme-ui';

const Names = ({ values, align = 'start', variant = 'body', ...props }) => (
  <Text
    as="div"
    {...props}
    sx={{ fontFamily: 'body', lineHeight: 'body', textAlign: align }}
    variant={`names.${variant}`}
  >
    {values.join(', ')}
  </Text>
);

export const alignments = ['start', 'center', 'end'];
const alignType = oneOf(alignments);

export const variants = ['default', 'bold'];
export const variantType = oneOf(variants);

Names.propTypes = {
  values: arrayOf(string).isRequired,
  align: oneOfType([alignType, arrayOf(alignType)]),
  variant: variantType,
};

export default Names;
