import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { SocialIcons } from '@undataforum/components';

const variants = ['primary', 'secondary', 'inherit'];

storiesOf('Components/SocialIcons', module)
  .addDecorator(withKnobs)
  .add('all social icons', () => (
    <SocialIcons
      platforms={[
        {
          id: 'twitter',
          username: 'UNDataForum',
          title: 'Follow us on Twitter',
        },
        { id: 'github', username: 'UNDataForum', title: 'Follow us on GitHub' },
        {
          id: 'email',
          username: 'dataforum@un.org',
          title: 'Send us an email',
        },
      ]}
      size={48}
      variant={select('variant', variants, 'primary')}
      m={2}
    />
  ))
  .add('different order', () => (
    <SocialIcons
      platforms={[
        {
          id: 'email',
          username: 'dataforum@un.org',
          title: 'Send us an email',
        },
        { id: 'github', username: 'UNDataForum', title: 'Follow us on GitHub' },
        {
          id: 'twitter',
          username: 'UNDataForum',
          title: 'Follow us on Twitter',
        },
      ]}
      size={48}
      variant={select('variant', variants, 'primary')}
      m={2}
    />
  ))
  .add('2 social icons', () => (
    <SocialIcons
      platforms={[
        {
          id: 'twitter',
          username: 'UNDataForum',
          title: 'Follow us on Twitter',
        },
        {
          id: 'email',
          username: 'dataforum@un.org',
          title: 'Send us an email',
        },
      ]}
      size={48}
      variant={select('variant', variants, 'primary')}
      m={2}
    />
  ))
  .add('1 social icon', () => (
    <SocialIcons
      platforms={[
        {
          id: 'twitter',
          username: 'UNDataForum',
          title: 'Follow us on Twitter',
        },
      ]}
      size={48}
      variant={select('variant', variants, 'primary')}
      m={2}
    />
  ));
