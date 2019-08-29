import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Badge from './Badge';

export const modes = {
  primary: 'primary',
  secondary: 'secondary',
  blue: 'blue',
  green: 'green',
  red: 'red',
  yellow: 'yellow',
};

storiesOf('Components/Badge', module)
  .addDecorator(withKnobs)
  .add('unlinked badge (default mode)', () => (
    <Badge m={2}>unlinked badge (default mode)</Badge>
  ))
  .add('linked badge (default mode)', () => (
    <Badge href="/default-mode" m={2}>
      linked badge (default mode)
    </Badge>
  ))
  .add('unlinked badge (custom mode)', () => (
    <Badge mode={select('mode', modes, 'red')} m={2}>
      unlinked badge (custom mode)
    </Badge>
  ))
  .add('linked badge (custom mode)', () => (
    <Badge href="/custom-mode" mode={select('mode', modes, 'yellow')} m={2}>
      linked badge (custom mode)
    </Badge>
  ));
