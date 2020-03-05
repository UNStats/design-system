import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { SmartLink } from '@undataforum/components';
import { Box } from 'theme-ui';

const variants = ['primary', 'secondary', 'inherit'];

storiesOf('Components/SmartLink', module)
  .addDecorator(withKnobs)
  .add('internal link', () => (
    <Box sx={{ m: 2 }}>
      <SmartLink
        sx={{ fontFamily: 'body' }}
        href="/internal-link"
        variant={select('variant', variants, 'primary')}
      >
        internal link
      </SmartLink>
    </Box>
  ))
  .add('external link', () => (
    <Box sx={{ m: 2 }}>
      <SmartLink
        sx={{ fontFamily: 'body' }}
        href="https://github.com/undataforum"
        variant={select('variant', variants, 'primary')}
      >
        external link
      </SmartLink>
    </Box>
  ));
