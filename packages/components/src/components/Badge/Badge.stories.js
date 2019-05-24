import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import Badge from './Badge';

storiesOf('Components/Badge', module)
  .addDecorator(withKnobs)
  .add('unlinked', () => (
    <Badge badge={object('badge', { text: 'Unlinked Badge' })} m={2} />
  ))
  .add('linked', () => (
    <Badge
      badge={object('badge', { text: 'Linked Badge', href: '/linked-badge' })}
      m={2}
    />
  ))
  .add('custom color', () => (
    <Badge
      badge={object('badge', { color: 'red', text: 'Custom Color' })}
      m={2}
    />
  ));
