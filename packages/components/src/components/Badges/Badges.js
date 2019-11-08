import React from 'react';
import { arrayOf } from 'prop-types';
import { Box, Flex } from '@theme-ui/components';

import Badge, { badgeType } from '../Badge';
import { alignType } from '../../types';

// Add margin around each badge.
// Neutralize outer margins with negative margins on Flex.
const Badges = ({ values, variant = 'center', ...props }) => (
  <Box {...props}>
    <Flex sx={{ flexWrap: 'wrap' }} variant={`badges.${variant}`} m={-1}>
      {values.map(value => (
        <Badge value={value} key={value.text} m={1} />
      ))}
    </Flex>
  </Box>
);

Badges.propTypes = {
  values: arrayOf(badgeType).isRequired,
  variant: alignType,
};

export default Badges;
