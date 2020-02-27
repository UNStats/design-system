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
      size={[24, 32, 48]}
      variant={select('variant', variants, 'primary')}
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
      size={[24, 32, 48]}
      variant={select('variant', variants, 'primary')}
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
      size={[24, 32, 48]}
      variant={select('variant', variants, 'primary')}
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
      size={[24, 32, 48]}
      variant={select('variant', variants, 'primary')}
    />
  ));
