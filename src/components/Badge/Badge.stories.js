import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import Badge from './Badge';

storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .add('default color', () => (
    <Badge
      badge={object('badge', {
        text: 'Badge',
      })}
      m={2}
    />
  ))
  .add('custom color', () => (
    <Badge badge={object('badge', { color: 'red', text: 'Badge' })} m={2} />
  ));
