import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'theme-ui';
import { EmailIcon } from '@undataforum/components';

storiesOf('Components/EmailIcon', module)
  .add('scale to height', () => (
    <Box sx={{ height: 64, m: 2 }}>
      <EmailIcon scaleTo="height" />
    </Box>
  ))
  .add('scale to width', () => (
    <Box sx={{ width: 64, m: 2 }}>
      <EmailIcon scaleTo="width" />
    </Box>
  ))
  .add('custom color', () => (
    <Box sx={{ height: 64, m: 2, color: 'primary' }}>
      <EmailIcon scaleTo="height" />
    </Box>
  ));
