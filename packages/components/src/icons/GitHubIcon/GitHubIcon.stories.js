import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from 'rebass';
import GitHubIcon from './GitHubIcon';

storiesOf('Icons/GitHubIcon', module)
  .add('display inline', () => (
    <Text m={2}>
      This icon <GitHubIcon width={32} /> is rendered inline.
    </Text>
  ))
  .add('add color and spacing', () => (
    <Text color="green" m={2}>
      This icon <GitHubIcon width={32} mx={2} /> is rendered inline with color
      and spacing.
    </Text>
  ));
