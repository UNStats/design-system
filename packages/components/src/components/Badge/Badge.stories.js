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
  .add('default mode', () => (
    <Badge
      link={{ text: 'Default mode', href: '/default-mode' }}
      mode={select('mode', modes, 'primary')}
      m={2}
    />
  ))
  .add('custom mode', () => (
    <Badge
      link={{ text: 'Custom mode', href: '/custom-mode' }}
      mode={select('mode', modes, 'yellow')}
      m={2}
    />
  ));
