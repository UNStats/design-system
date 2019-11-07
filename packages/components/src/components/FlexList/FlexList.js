import React from 'react';
import { arrayOf, func, object } from 'prop-types';
import { Flex } from '@theme-ui/components';

import { alignType } from '../../types';

// sx and variant cannot be overridden.
// The underlying Box component accepts only color and space props.
const FlexList = ({ render, values, variant = 'center', ...props }) => (
  <Flex {...props} sx={{ flexWrap: 'wrap' }} variant={`flexList.${variant}`}>
    {values.map(value => render(value))}
  </Flex>
);

FlexList.propTypes = {
  render: func.isRequired,
  values: arrayOf(object).isRequired,
  variant: alignType,
};

export default FlexList;
