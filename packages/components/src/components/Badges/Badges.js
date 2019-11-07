import React from 'react';
import { arrayOf } from 'prop-types';
import { Box } from '@theme-ui/components';

import Badge, { badgeType } from '../Badge';
import { alignType } from '../../types';
import FlexList from '../FlexList';

// Add margin around each badge.
// Neutralize outer margins with negative margins on FlexList.
const Badges = ({ values, variant = 'center', ...props }) => (
  <Box {...props}>
    <FlexList
      render={badge => <Badge value={badge} key={badge.text} m={1} />}
      values={values}
      variant={variant}
      m={-1}
    />
  </Box>
);

Badges.propTypes = {
  values: arrayOf(badgeType).isRequired,
  variant: alignType,
};

export default Badges;
