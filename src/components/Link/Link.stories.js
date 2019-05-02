import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Link from './Link';

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .add('internal link', () => (
    <Link href={text('href', '/internal-link')}>
      {text('text', 'internal link')}
    </Link>
  ))
  .add('external link', () => (
    <Link href={text('href', 'https://github.com/undataforum')}>
      {text('text', 'external link')}
    </Link>
  ));
