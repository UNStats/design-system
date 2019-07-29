import React from 'react';
import { storiesOf } from '@storybook/react';
import GitHubIcon from '../../icons/GitHubIcon';
import TwitterIcon from '../../icons/TwitterIcon';
import SocialIcon from './SocialIcon';

storiesOf('Components/SocialIcon', module)
  .add('GitHub', () => (
    <SocialIcon
      color="inherit"
      href="https://github.com/UNDataForum"
      render={() => <GitHubIcon width={[32, 48]} p={[1, 2]} />}
    />
  ))
  .add('Twitter', () => (
    <SocialIcon
      color="green"
      href="https://twitter.com/UNDataForum"
      render={() => <TwitterIcon width={[32, 48]} p={[1, 2]} />}
    />
  ));
