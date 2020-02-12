import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { SocialIcons } from '@undataforum/components';

const variants = ['branded', 'primary', 'secondary'];

storiesOf('Components/SocialIcons', module)
  .addDecorator(withKnobs)
  .add('all social icons', () => (
    <SocialIcons
      usernames={{
        twitter: 'UNDataForum',
        github: 'UNDataForum',
        email: 'dataforum@un.org',
      }}
      variant={select('variant', variants, 'branded')}
    />
  ))
  .add('2 social icons', () => (
    <SocialIcons
      usernames={{
        twitter: 'UNDataForum',
        email: 'dataforum@un.org',
      }}
      variant={select('variant', variants, 'branded')}
    />
  ))
  .add('1 social icon', () => (
    <SocialIcons
      usernames={{
        twitter: 'UNDataForum',
      }}
      variant={select('variant', variants, 'branded')}
    />
  ));
