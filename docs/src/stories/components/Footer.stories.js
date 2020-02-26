import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Box } from 'theme-ui';
import { Footer, SocialIcons } from '@undataforum/components';

import DummyLogo from '../../components/dummy-logo';

const logo = (
  <Box sx={{ height: 'height.medium' }}>
    <DummyLogo scaleTo="height" />
  </Box>
);
const socialIcons = (
  <SocialIcons
    usernames={{
      twitter: 'UNDataForum',
      github: 'UNDataForum',
      email: 'dataforum@un.org',
    }}
    variant="inherit"
  />
);
export const variants = ['primary', 'secondary'];

storiesOf('Components/Footer', module)
  .addDecorator(withKnobs)
  .add('everything', () => (
    <Footer
      logo={logo}
      title="Footer Title"
      socialIcons={socialIcons}
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
      logo={logo}
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
      socialIcons={socialIcons}
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
