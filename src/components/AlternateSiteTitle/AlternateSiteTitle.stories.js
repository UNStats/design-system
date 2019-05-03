import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import AlternateSiteTitle from './AlternateSiteTitle';

storiesOf('AlternateSiteTitle', module)
  .addDecorator(withKnobs)
  .add('default color', () => (
    <AlternateSiteTitle year={number('year', 2019)} m={2} />
  ))
  .add('custom color', () => (
    <AlternateSiteTitle
      color={text('color', 'red')}
      year={number('year', 2019)}
      m={2}
    />
  ));
