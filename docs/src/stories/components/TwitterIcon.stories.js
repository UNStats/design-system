import React from 'react';
import { storiesOf } from '@storybook/react';
import { TwitterIcon } from '@undataforum/components';

storiesOf('Components/TwitterIcon', module)
  .add('default', () => <TwitterIcon />)
  .add('custom size', () => <TwitterIcon size={64} />)
  .add('with title', () => <TwitterIcon title="Follow us on Twitter" />)
  .add('responsive size', () => <TwitterIcon size={[32, 64, 128]} />);
