import React from 'react';
import { arrayOf, func, object, oneOf } from 'prop-types';
import { compose, grid, flexbox } from 'styled-system';
import { Box } from 'rebass';
import { responsiveNumberType, responsiveStringType } from '../../types';

const lookup = {
  left: 'start',
  center: 'center',
  right: 'end',
};

const GridList = ({
  align = 'center',
  gridGap: gap = 3,
  gridTemplateColumns: columns,
  render,
  values,
  ...props
}) => (
  <Box
    {...props}
    css={`
      ${compose(
        grid,
        flexbox
      )}
      display: grid;
    `}
    gridGap={gap}
    gridTemplateColumns={columns}
    justifyContent={lookup[align]}
  >
    {values.map(value => render(value))}
  </Box>
);

GridList.propTypes = {
  align: oneOf(['left', 'center', 'right']),
  gridGap: responsiveNumberType,
  gridTemplateColumns: responsiveStringType.isRequired,
  render: func.isRequired,
  values: arrayOf(object).isRequired,
};

export default GridList;
