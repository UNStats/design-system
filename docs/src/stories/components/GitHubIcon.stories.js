import React from 'react';
import { storiesOf } from '@storybook/react';
import { GitHubIcon } from '@undataforum/components';

storiesOf('Components/GitHubIcon', module)
  .add('default', () => <GitHubIcon />)
  .add('custom size', () => <GitHubIcon size={64} />)
  .add('with title', () => <GitHubIcon title="Follow us on GitHub" />)
  .add('responsive size', () => <GitHubIcon size={[32, 64, 128]} />);
