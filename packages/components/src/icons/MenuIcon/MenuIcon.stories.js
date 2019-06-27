import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from 'rebass';
import MenuIcon from './MenuIcon';

storiesOf('Icons/MenuIcon', module)
  .add('display inline', () => (
    <Text m={2}>
      This icon <MenuIcon width={32} /> is rendered inline.
    </Text>
  ))
  .add('add color and spacing', () => (
    <Text color="green" m={2}>
      This icon <MenuIcon width={32} mx={2} /> is rendered inline with color and
      spacing.
    </Text>
  ))
  .add('responsive', () => (
    <Text color="green" m={2}>
      This icon&apos;s <MenuIcon width={[32, 64]} mx={2} /> width increases on
      large screens.
    </Text>
  ));
