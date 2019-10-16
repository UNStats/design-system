import React from 'react';
import { arrayOf, func, object } from 'prop-types';
import { Box } from 'rebass';
import {
  alignType,
  responsiveNumberType,
  responsiveStringType,
} from '../../types';

const GridList = ({
  align = 'center',
  gridGap = 3,
  gridTemplateColumns,
  render,
  values,
  ...props
}) => {
  // Map align prop to justifyContent.
  let justifyContent;
  if (align === 'left') {
    justifyContent = 'start';
  } else if (align === 'right') {
    justifyContent = 'end';
  } else {
    justifyContent = 'center';
  }
  return (
    <Box
      {...props}
      sx={{
        display: 'grid',
        gridGap,
        gridTemplateColumns,
        justifyContent,
      }}
    >
      {values.map(value => render(value))}
    </Box>
  );
};

GridList.propTypes = {
  align: alignType,
  gridGap: responsiveNumberType,
  gridTemplateColumns: responsiveStringType.isRequired,
  render: func.isRequired,
  values: arrayOf(object).isRequired,
};

export default GridList;
