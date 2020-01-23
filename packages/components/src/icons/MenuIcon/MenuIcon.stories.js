import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'theme-ui';

import MenuIcon from './MenuIcon';

storiesOf('Icons/MenuIcon', module)
  .add('scale to height', () => (
    <Box sx={{ height: 64, m: 2 }}>
      <MenuIcon scaleTo="height" />
    </Box>
  ))
  .add('scale to width', () => (
    <Box sx={{ width: 64, m: 2 }}>
      <MenuIcon scaleTo="width" />
    </Box>
  ))
  .add('custom color', () => (
    <Box sx={{ height: 64, m: 2, color: 'primary' }}>
      <MenuIcon scaleTo="height" />
    </Box>
  ));
