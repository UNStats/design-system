import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import GitHubIcon from '../../icons/GitHubIcon';
import TwitterIcon from '../../icons/TwitterIcon';

import SocialIcon, { variants } from './SocialIcon';

storiesOf('Components/SocialIcon', module)
  .addDecorator(withKnobs)
  .add('GitHub', () => (
    <SocialIcon
      render={() => <GitHubIcon width={[32, 48]} p={[1, 2]} />}
      href="https://github.com/UNDataForum"
      variant={select('variant', variants, 'branded')}
    />
  ))
  .add('Twitter', () => (
    <SocialIcon
      render={() => <TwitterIcon width={[32, 48]} p={[1, 2]} />}
      href="https://twitter.com/UNDataForum"
      variant={select('variant', variants, 'branded')}
    />
  ));
