import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Badge, { variants } from './Badge';

storiesOf('Components/Badge', module)
  .addDecorator(withKnobs)
  .add('default variant', () => <Badge text="default" m={2} />)
  .add('custom variant', () => (
    <Badge
      text="custom"
      variant={select('variant', variants, 'secondary')}
      m={2}
    />
  ));
