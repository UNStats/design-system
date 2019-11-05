import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '@theme-ui/components';

import CloseIcon from './CloseIcon';

storiesOf('Icons/CloseIcon', module)
  .add('default', () => (
    <Text sx={{ fontFamily: 'body', m: 2 }}>
      This icon <CloseIcon width={32} /> is rendered inline.
    </Text>
  ))
  .add('custom color and spacing', () => (
    <Text sx={{ color: 'green', fontFamily: 'body', m: 2 }}>
      This icon <CloseIcon width={32} mx={2} /> is rendered inline with color
      and spacing.
    </Text>
  ))
  .add('responsive', () => (
    <Text sx={{ color: 'green', fontFamily: 'body', m: 2 }}>
      This icon&apos;s <CloseIcon width={[32, 64]} mx={2} /> width increases on
      large screens.
    </Text>
  ));
