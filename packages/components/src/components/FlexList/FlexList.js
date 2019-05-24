import React from 'react';
import { arrayOf, func, object } from 'prop-types';
import { Flex } from 'rebass';

const FlexList = ({ render, values, ...props }) => (
  <Flex {...props} flexWrap="wrap" justifyContent="center">
    {values.map(value => render(value))}
  </Flex>
);

FlexList.propTypes = {
  render: func.isRequired,
  values: arrayOf(object).isRequired,
};

export default FlexList;
