import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Box } from 'theme-ui';
import { Footer, SocialIcons } from '@undataforum/components';

import DummyLogo from '../../components/dummy-logo';

// Variables defined outside stories are not displayed in story source.
// This one is for knobs select.
const variants = ['primary', 'secondary'];

storiesOf('Components/Footer', module)
  .addDecorator(withKnobs)
  .add('everything', () => (
    <Footer
      logo={
        <Box sx={{ height: 'height.medium' }}>
          <DummyLogo scaleTo="height" />
        </Box>
      }
      title="Footer Title"
      socialIcons={
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
          variant="inherit"
          mb={3}
        />
      }
      links={[
        { text: 'Contact', href: '/contact' },
        { text: 'Copyright', href: '/copyright' },
        { text: 'Privacy Notice', href: '/privacy' },
        { text: 'Terms of Use', href: '/terms' },
      ]}
      variant={select('variant', variants, 'primary')}
    />
  ))
  .add('logo only', () => (
    <Footer
      logo={
        <Box sx={{ height: 'height.medium' }}>
          <DummyLogo scaleTo="height" />
        </Box>
      }
      links={[
        { text: 'Contact', href: '/contact' },
        { text: 'Copyright', href: '/copyright' },
        { text: 'Fraud Alert', href: '/fraud-alert' },
        { text: 'Privacy Notice', href: '/privacy-notice' },
        { text: 'Terms of Use', href: '/terms-of-use' },
      ]}
      variant={select('variant', variants, 'primary')}
    />
  ))
  .add('title only', () => (
    <Footer
      title="Footer Title"
      links={[
        { text: 'Contact', href: '/contact' },
        { text: 'Copyright', href: '/copyright' },
        { text: 'Fraud Alert', href: '/fraud-alert' },
        { text: 'Privacy Notice', href: '/privacy-notice' },
        { text: 'Terms of Use', href: '/terms-of-use' },
      ]}
      variant={select('variant', variants, 'primary')}
    />
  ))
  .add('social only', () => (
    <Footer
      socialIcons={
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
          variant="inherit"
          mb={3}
        />
      }
      links={[
        { text: 'Contact', href: '/contact' },
        { text: 'Copyright', href: '/copyright' },
        { text: 'Fraud Alert', href: '/fraud-alert' },
        { text: 'Privacy Notice', href: '/privacy-notice' },
        { text: 'Terms of Use', href: '/terms-of-use' },
      ]}
      variant={select('variant', variants, 'primary')}
    />
  ))
  .add('minimalistic', () => (
    <Footer
      links={[
        { text: 'Contact', href: '/contact' },
        { text: 'Copyright', href: '/copyright' },
        { text: 'Fraud Alert', href: '/fraud-alert' },
        { text: 'Privacy Notice', href: '/privacy-notice' },
        { text: 'Terms of Use', href: '/terms-of-use' },
      ]}
      variant={select('variant', variants, 'primary')}
    />
  ));
