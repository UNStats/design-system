import React from 'react';
import { storiesOf } from '@storybook/react';

import Logo from './Logo';

storiesOf('Logo', module)
  .add('set height only', () => <Logo height={128} m={2} />)
  .add('set width only', () => <Logo width={128} m={2} />)
  .add('set height and width', () => <Logo height={128} width={256} m={2} />)
  .add('monochrome', () => (
    <div style={{ color: 'black' }}>
      <Logo monochrome height={128} m={2} />
    </div>
  ));
