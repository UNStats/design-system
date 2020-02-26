import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { SocialIcons } from '@undataforum/components';

const variants = ['primary', 'secondary', 'inherit'];

storiesOf('Components/SocialIcons', module)
  .addDecorator(withKnobs)
  .add('all social icons', () => (
    <SocialIcons
      usernames={{
        twitter: 'UNDataForum',
        github: 'UNDataForum',
        email: 'dataforum@un.org',
      }}
      variant={select('variant', variants, 'primary')}
    />
  ))
  .add('2 social icons', () => (
    <SocialIcons
      usernames={{
        twitter: 'UNDataForum',
        email: 'dataforum@un.org',
      }}
      variant={select('variant', variants, 'primary')}
    />
  ))
  .add('1 social icon', () => (
    <SocialIcons
      usernames={{
        twitter: 'UNDataForum',
      }}
      variant={select('variant', variants, 'primary')}
    />
  ));
