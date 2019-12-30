import React from 'react';
import { arrayOf, oneOf, string } from 'prop-types';
import { Box, Flex } from '@theme-ui/components';

import Badge from '../Badge';

// Add margin around each badge.
// Neutralize outer margins with negative margins on Flex.
const Badges = ({
  values,
  color,
  bg,
  align = 'flex-start',
  variant,
  ...props
}) => (
  <Box {...props}>
    <Flex sx={{ flexWrap: 'wrap', justifyContent: align }} m={-1}>
      {values.map(value => (
        <Badge key={value} color={color} bg={bg} variant={variant} m={1}>
          {value}
        </Badge>
      ))}
    </Flex>
  </Box>
);

export const alignments = ['flex-start', 'center', 'flex-end'];
export const alignType = oneOf(alignments);

Badges.propTypes = {
  values: arrayOf(string).isRequired,
  color: string.isRequired,
  bg: string.isRequired,
  align: alignType,
  variant: oneOf(['outline']),
};

export default Badges;
