import React from "react";
import PropTypes from "prop-types";
import { Flex } from "rebass";

const FlexList = ({ color, gap, link, render, values, ...props }) => (
  <Flex {...props} flexWrap="wrap" justifyContent="center">
    {values.map(value => render(value))}
  </Flex>
);

FlexList.propTypes = {
  gap: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  render: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.object).isRequired
};

FlexList.defaultProps = {
  gap: 3
};

export default FlexList;
