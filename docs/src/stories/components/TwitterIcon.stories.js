import React from 'react';
import { storiesOf } from '@storybook/react';
import { TwitterIcon } from '@undataforum/components';
import { Box } from 'theme-ui';

storiesOf('Components/TwitterIcon', module)
  .add('default', () => (
    <Box sx={{ m: 2 }}>
      <TwitterIcon />
    </Box>
  ))
  .add('custom size', () => (
    <Box sx={{ m: 2 }}>
      <TwitterIcon size={64} />
    </Box>
  ))
  .add('with title', () => (
    <Box sx={{ m: 2 }}>
      <TwitterIcon title="Follow us on Twitter" />
    </Box>
  ))
  .add('responsive size', () => (
    <Box sx={{ m: 2 }}>
      <TwitterIcon size={[32, 64, 128]} />
    </Box>
  ));
