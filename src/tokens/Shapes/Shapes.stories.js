import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Shapes from './Shapes';

const colorOptions = {
  primary: 'primary',
  secondary: 'secondary',
  blue: 'blue',
  green: 'green',
  red: 'red',
  yellow: 'yellow',
  none: null,
};

storiesOf('Tokens/Shapes', module)
  .addDecorator(withKnobs)
  .add('set height only', () => (
    <Shapes color={select('color', colorOptions, null)} height={128} m={2} />
  ))
  .add('set width only', () => (
    <Shapes color={select('color', colorOptions, null)} width={128} m={2} />
  ))
  .add('set height and width', () => (
    <Shapes
      color={select('color', colorOptions, null)}
      height={128}
      width={256}
      m={2}
    />
  ));
