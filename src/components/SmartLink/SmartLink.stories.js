import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import SmartLink from './SmartLink';

storiesOf('SmartLink', module)
  .addDecorator(withKnobs)
  .add('internal link', () => (
    <SmartLink href={text('href', '/internal-link')}>
      {text('text', 'internal link')}
    </SmartLink>
  ))
  .add('external link', () => (
    <SmartLink href={text('href', 'https://github.com/undataforum')}>
      {text('text', 'external link')}
    </SmartLink>
  ));
