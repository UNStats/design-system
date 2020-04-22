import React from 'react';
import { storiesOf } from '@storybook/react';
import { GitHubIcon } from '@undataforum/components';
import { Box } from 'theme-ui';

storiesOf('Components/GitHubIcon', module)
  .add('default', () => (
    <Box sx={{ m: 2 }}>
      <GitHubIcon />
    </Box>
  ))
  .add('custom size', () => (
    <Box sx={{ m: 2 }}>
      <GitHubIcon size={64} />
    </Box>
  ))
  .add('with title', () => (
    <Box sx={{ m: 2 }}>
      <GitHubIcon title="Follow us on GitHub" />
    </Box>
  ))
  .add('responsive size', () => (
    <Box sx={{ m: 2 }}>
      <GitHubIcon size={[32, 64, 128]} />
    </Box>
  ));
