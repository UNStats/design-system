import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { SocialIcons } from '@undataforum/components';
import { Box } from 'theme-ui';

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
      m={2}
    />
  ))
  .add('render on custom background color', () => (
    <Box sx={{ color: 'background', bg: 'primary', p: 2 }}>
      <SocialIcons
        platforms={[
          {
            id: 'twitter',
            username: 'UNDataForum',
            title: 'Follow us on Twitter',
          },
          {
            id: 'github',
            username: 'UNDataForum',
            title: 'Follow us on GitHub',
          },
          {
            id: 'email',
            username: 'dataforum@un.org',
            title: 'Send us an email',
          },
        ]}
        size={48}
      />
    </Box>
  ));
