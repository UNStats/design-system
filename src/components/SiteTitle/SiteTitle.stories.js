import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import SiteTitle from './SiteTitle';

storiesOf('SiteTitle', module)
  .addDecorator(withKnobs)
  .add('default color', () => <SiteTitle m={2} />)
  .add('custom color', () => <SiteTitle color={text('color', 'red')} m={2} />);
