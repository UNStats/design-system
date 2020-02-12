import React from 'react';
import { arrayOf, oneOf, string } from 'prop-types';
import { Badge, Box, Flex } from 'theme-ui';

import { responsiveAlignType } from './types';
import { normalizeAlign } from './util';

// Add margin around each badge.
// Neutralize outer margins with negative margins on Flex.
const Badges = ({ values, color, bg, align = 'start', variant, ...props }) => (
  <Box {...props}>
    <Flex
      sx={{ flexWrap: 'wrap', justifyContent: normalizeAlign(align) }}
      m={-1}
    >
      {values.map(value => (
        <Badge key={value} sx={{ color, bg, m: 1 }} variant={variant}>
          {value}
        </Badge>
      ))}
    </Flex>
  </Box>
);

Badges.propTypes = {
  values: arrayOf(string).isRequired,
  color: string.isRequired,
  bg: string.isRequired,
  align: responsiveAlignType,
  variant: oneOf(['outline']),
};

export default Badges;
