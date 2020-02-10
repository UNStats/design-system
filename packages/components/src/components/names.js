import React from 'react';
import { arrayOf, oneOf, string } from 'prop-types';
import { Text } from 'theme-ui';

import { responsiveAlignType } from '../types';

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

const variantType = oneOf(['default', 'bold']);

Names.propTypes = {
  values: arrayOf(string).isRequired,
  align: responsiveAlignType,
  variant: variantType,
};

export default Names;
