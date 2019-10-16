import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import GitHubIcon from '../../icons/GitHubIcon';
import TwitterIcon from '../../icons/TwitterIcon';
import { colors as themeColors } from '../../theme';
import SocialIcon from './SocialIcon';

// Add `inherit` to colors.
const colors = [...Object.keys(themeColors), 'inherit'];

storiesOf('Components/SocialIcon', module)
  .addDecorator(withKnobs)
  .add('GitHub', () => (
    <SocialIcon
      color={select('color', colors, 'text')}
      href="https://github.com/UNDataForum"
      render={() => <GitHubIcon width={[32, 48]} p={[1, 2]} />}
    />
  ))
  .add('Twitter', () => (
    <SocialIcon
      color={select('color', colors, 'text')}
      href="https://twitter.com/UNDataForum"
      render={() => <TwitterIcon width={[32, 48]} p={[1, 2]} />}
    />
  ));
