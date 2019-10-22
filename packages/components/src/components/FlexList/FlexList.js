import React from 'react';
import { arrayOf, func, object } from 'prop-types';
import { Flex } from '@theme-ui/components';

// flexWrap and justifyContent cannot be overridden.
// The underlying Box component accepts only color and space props.
const FlexList = ({ render, values, ...props }) => (
  <Flex {...props} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
    {values.map(value => render(value))}
  </Flex>
);

FlexList.propTypes = {
  render: func.isRequired,
  values: arrayOf(object).isRequired,
};

export default FlexList;
