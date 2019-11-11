import React from 'react';
import { storiesOf } from '@storybook/react';

import Logo from './Logo';

storiesOf('Logo', module)
  .add('scale to height', () => (
    <div style={{ height: '128px', margin: '8px' }}>
      <Logo scaleTo="height" />
    </div>
  ))
  .add('scale to width', () => (
    <div style={{ width: '128px', margin: '8px' }}>
      <Logo scaleTo="width" />
    </div>
  ))
  .add('monochrome', () => (
    <div style={{ height: '128px', margin: '8px', color: 'green' }}>
      <Logo scaleTo="height" monochrome />
    </div>
  ));
