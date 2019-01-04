import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  getWidth,
  gridGap,
  gridTemplateColumns,
  justifyContent
} from "styled-system";
import { Box } from "rebass";

const Grid = styled(Box)(gridGap, gridTemplateColumns, justifyContent);

const lookup = {
  left: "start",
  center: "center",
  right: "end"
};

// Transform width prop.
const transform = width => {
  if (!Array.isArray(width)) {
    return `repeat(auto-fit, ${getWidth(width)})`;
  }
  return width.map(w => `repeat(auto-fit, ${getWidth(w)})`);
};

const GridList = ({ align, gap, render, values, width, ...props }) => (
  <Grid
    {...props}
    css="display: grid;"
    gridGap={gap}
    gridTemplateColumns={transform(width)}
    justifyContent={lookup[align]}
  >
    {values.map(value => render(value))}
  </Grid>
);

GridList.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"]),
  gap: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  render: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired
};

GridList.defaultProps = {
  align: "center",
  gap: 3
};

export default GridList;
