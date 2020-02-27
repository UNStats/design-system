import React from 'react';
import { storiesOf } from '@storybook/react';
import { EmailIcon } from '@undataforum/components';

storiesOf('Components/EmailIcon', module)
  .add('default', () => <EmailIcon />)
  .add('custom size', () => <EmailIcon size={64} />)
  .add('with title', () => <EmailIcon title="Send us an email" />)
  .add('responsive size', () => <EmailIcon size={[32, 64, 128]} />);
