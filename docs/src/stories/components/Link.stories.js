import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Link } from '@undataforum/components';
import { Box } from 'theme-ui';

const colors = ['primary', 'secondary', 'inherit'];

storiesOf('Components/Link', module)
  .addDecorator(withKnobs)
  .add('internal link', () => (
    <Box sx={{ m: 2 }}>
      <Link
        sx={{
          color: select('color', colors, 'primary'),
          fontFamily: 'body',
        }}
        href="/internal-link"
      >
        internal link
      </Link>
    </Box>
  ))
  .add('external link', () => (
    <Box sx={{ m: 2 }}>
      <Link
        sx={{ color: select('color', colors, 'primary'), fontFamily: 'body' }}
        href="https://github.com/undataforum"
      >
        external link
      </Link>
    </Box>
  ))
  .add('internal PDF link', () => (
    <Box sx={{ m: 2 }}>
      <Link
        sx={{ color: select('color', colors, 'primary'), fontFamily: 'body' }}
        href="/path/to/a.pdf"
      >
        internal PDF link
      </Link>
    </Box>
  ))
  .add('disabled link', () => (
    <Box sx={{ m: 2 }}>
      <Link
        sx={{ color: select('color', colors, 'primary'), fontFamily: 'body' }}
      >
        disabled link
      </Link>
    </Box>
  ));
