import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { gridGap, gridTemplateColumns, justifyContent } from "styled-system";
import { Box } from "rebass";

const Grid = styled(Box)(gridGap, gridTemplateColumns, justifyContent);

const GridList = ({ gap, render, values, width, ...props }) => {
  const repeat = `repeat(auto-fit, ${width})`;
  return (
    <Grid
      {...props}
      css={{ display: "grid" }}
      gridGap={gap}
      gridTemplateColumns={repeat}
      justifyContent="center"
    >
      {values.map(value => render(value))}
    </Grid>
  );
};

GridList.propTypes = {
  gap: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  render: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.string.isRequired
};

GridList.defaultProps = {
  gap: 3
};

export default GridList;
