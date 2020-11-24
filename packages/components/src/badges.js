import React from 'react';
import { arrayOf, number, oneOf, oneOfType, string } from 'prop-types';
import { Badge, Box, Flex } from 'theme-ui';

import { normalizeAlign } from './util';

// Add margin around each badge.
// Neutralize outer margins with negative margins on Flex.
const Badges = ({
  values,
  gap = 2,
  align = 'start',
  variant = 'badges.primary',
  ...props
}) => (
  <Box {...props}>
    <Flex
      sx={{
        // flexDirection: 'row',
        justifyContent: normalizeAlign(align),
        // alignItems: 'stretch',
        flexWrap: 'wrap',
        mr: -gap,
        mb: -gap,
      }}
    >
      {values.map((value) => (
        <Badge
          key={value}
          sx={{
            variant,
            mr: gap,
            mb: gap,
          }}
        >
          {value}
        </Badge>
      ))}
    </Flex>
  </Box>
);

const alignments = ['start', 'center', 'end'];
const alignType = oneOf(alignments);

Badges.propTypes = {
  values: arrayOf(string.isRequired).isRequired,
  gap: number,
  align: oneOfType([alignType, arrayOf(alignType)]),
  variant: string,
};

export default Badges;
