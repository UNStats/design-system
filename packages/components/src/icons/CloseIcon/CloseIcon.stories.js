import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '@theme-ui/components';

import CloseIcon from './CloseIcon';

storiesOf('Icons/CloseIcon', module)
  .add('scale to height', () => (
    <Box sx={{ height: 64, m: 2 }}>
      <CloseIcon scaleTo="height" />
    </Box>
  ))
  .add('scale to width', () => (
    <Box sx={{ width: 64, m: 2 }}>
      <CloseIcon scaleTo="width" />
    </Box>
  ))
  .add('custom color', () => (
    <Box sx={{ height: 64, m: 2, color: 'primary' }}>
      <CloseIcon scaleTo="height" />
    </Box>
  ));
