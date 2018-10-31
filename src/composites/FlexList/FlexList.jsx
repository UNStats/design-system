import React from "react";
import PropTypes from "prop-types";
import { Flex } from "rebass";

const FlexList = ({ color, link, render, values, ...props }) => (
  <Flex {...props} flexWrap="wrap" justifyContent="center">
    {values.map(value => render(value))}
  </Flex>
);

FlexList.propTypes = {
  render: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FlexList;
