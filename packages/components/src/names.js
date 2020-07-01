import React from 'react';
import { arrayOf, oneOf, oneOfType, string } from 'prop-types';
import { Text } from 'theme-ui';

const Names = ({
  values,
  align = 'start',
  variant = 'names.default',
  ...props
}) => (
  <Text
    as="div"
    {...props}
    sx={{
      fontFamily: 'body',
      lineHeight: 'body',
      // Anything below variant cannot be overridden by this variant.
      variant,
      textAlign: align,
    }}
  >
    {values.join(', ')}
  </Text>
);

const alignments = ['start', 'center', 'end'];
const alignType = oneOf(alignments);

Names.propTypes = {
  values: arrayOf(string).isRequired,
  align: oneOfType([alignType, arrayOf(alignType)]),
  variant: string,
};

export default Names;
