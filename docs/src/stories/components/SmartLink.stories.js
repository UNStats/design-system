import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { SmartLink } from '@undataforum/components';

const variants = ['primary', 'secondary', 'inherit'];

storiesOf('Components/SmartLink', module)
  .addDecorator(withKnobs)
  .add('internal link', () => (
    <SmartLink
      sx={{ fontFamily: 'body' }}
      href="/internal-link"
      variant={select('variant', variants, 'primary')}
    >
      internal link
    </SmartLink>
  ))
  .add('external link', () => (
    <SmartLink
      sx={{ fontFamily: 'body' }}
      href="https://github.com/undataforum"
      variant={select('variant', variants, 'primary')}
    >
      external link
    </SmartLink>
  ));
