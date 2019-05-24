import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Text } from 'rebass';
import SmartLink from './SmartLink';

storiesOf('Components/SmartLink', module)
  .addDecorator(withKnobs)
  .add('internal link', () => (
    <SmartLink href={text('href', '/internal-link')}>
      <Text fontFamily="body" m={2}>
        {text('text', 'internal link')}
      </Text>
    </SmartLink>
  ))
  .add('external link', () => (
    <SmartLink href={text('href', 'https://github.com/undataforum')}>
      <Text fontFamily="body" m={2}>
        {text('text', 'external link')}
      </Text>
    </SmartLink>
  ));
