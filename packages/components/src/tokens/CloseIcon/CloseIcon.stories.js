import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from 'rebass';
import CloseIcon from './CloseIcon';

storiesOf('Tokens/CloseIcon', module)
  .add('display inline', () => (
    <Text m={2}>
      This icon <CloseIcon width={32} /> is rendered inline.
    </Text>
  ))
  .add('add color and spacing', () => (
    <Text color="green" m={2}>
      This icon <CloseIcon width={32} mx={2} /> is rendered inline with color
      and spacing.
    </Text>
  ));
