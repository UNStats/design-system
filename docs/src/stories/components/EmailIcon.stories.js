import React from 'react';
import { storiesOf } from '@storybook/react';
import { EmailIcon } from '@undataforum/components';
import { Box } from 'theme-ui';

storiesOf('Components/EmailIcon', module)
  .add('default', () => (
    <Box sx={{ m: 2 }}>
      <EmailIcon />
    </Box>
  ))
  .add('custom size', () => (
    <Box sx={{ m: 2 }}>
      <EmailIcon size={64} />
    </Box>
  ))
  .add('with title', () => (
    <Box sx={{ m: 2 }}>
      <EmailIcon title="Send us an email" />
    </Box>
  ))
  .add('responsive size', () => (
    <Box sx={{ m: 2 }}>
      <EmailIcon size={[32, 64, 128]} />
    </Box>
  ));
