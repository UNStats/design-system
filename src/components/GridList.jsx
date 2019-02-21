import React from "react";
import { arrayOf, func, object, oneOf } from "prop-types";
import styled from "styled-components";
import { gridGap, gridTemplateColumns, justifyContent } from "styled-system";
import { Box } from "rebass";
import { responsiveNumberType, responsiveStringType } from "../types";

const Grid = styled(Box)(gridGap, gridTemplateColumns, justifyContent);

const lookup = {
  left: "start",
  center: "center",
  right: "end"
};

const GridList = ({
  align,
  gridGap: gap,
  gridTemplateColumns: columns,
  render,
  values,
  ...props
}) => (
  <Grid
    {...props}
    css="display: grid;"
    gridGap={gap}
    gridTemplateColumns={columns}
    justifyContent={lookup[align]}
  >
    {values.map(value => render(value))}
  </Grid>
);

GridList.propTypes = {
  align: oneOf(["left", "center", "right"]),
  gridGap: responsiveNumberType,
  gridTemplateColumns: responsiveStringType.isRequired,
  render: func.isRequired,
  values: arrayOf(object).isRequired
};

GridList.defaultProps = {
  align: "center",
  gridGap: 3
};

export default GridList;
