import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '@theme-ui/components';

import TwitterIcon from './TwitterIcon';

storiesOf('Icons/TwitterIcon', module)
  .add('scale to height', () => (
    <Box sx={{ height: 64, m: 2 }}>
      <TwitterIcon scaleTo="height" />
    </Box>
  ))
  .add('scale to width', () => (
    <Box sx={{ width: 64, m: 2 }}>
      <TwitterIcon scaleTo="width" />
    </Box>
  ))
  .add('custom color', () => (
    <Box sx={{ height: 64, m: 2, color: 'primary' }}>
      <TwitterIcon scaleTo="height" />
    </Box>
  ));
