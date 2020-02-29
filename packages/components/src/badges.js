import React from 'react';
import { arrayOf, oneOf, oneOfType, string } from 'prop-types';
import { Badge, Box, Flex } from 'theme-ui';

import { normalizeAlign } from './util';

// Add margin around each badge.
// Neutralize outer margins with negative margins on Flex.
const Badges = ({ values, align = 'start', variant = 'primary', ...props }) => (
  <Box {...props}>
    <Flex
      sx={{
        flexWrap: 'wrap',
        justifyContent: normalizeAlign(align),
      }}
      m={-1}
    >
      {values.map(value => (
        <Badge
          key={value}
          sx={{
            m: 1,
          }}
          variant={variant}
        >
          {value}
        </Badge>
      ))}
    </Flex>
  </Box>
);

const alignments = ['start', 'center', 'end'];
const alignType = oneOf(alignments);

// You can add your own variants applications.
Badges.propTypes = {
  values: arrayOf(string).isRequired,
  align: oneOfType([alignType, arrayOf(alignType)]),
  variant: string,
};

export default Badges;
