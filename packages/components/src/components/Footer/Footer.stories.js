import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { DummyLogo } from '../../helpers';
import FlexList from '../FlexList';
import { GitHubIcon, TwitterIcon } from '../../icons';
import SmartLink from '../SmartLink';
import Footer, { variants } from './Footer';

const GitHub = () => (
  <SmartLink color="inherit" href="https://github.com/UNDataForum" key="github">
    <GitHubIcon width={[32, 48]} p={[1, 2]} />
  </SmartLink>
);

const Twitter = () => (
  <SmartLink
    color="inherit"
    href="https://twitter.com/UNDataForum"
    key="twitter"
  >
    <TwitterIcon width={[32, 48]} p={[1, 2]} />
  </SmartLink>
);

storiesOf('Components/Footer', module)
  .addDecorator(withKnobs)
  .add('everything', () => (
    <Footer
      logo={() => <DummyLogo height="logo.medium" />}
      title="Footer Title"
      social={() => (
        <FlexList
          render={value => value.icon()}
          values={[{ icon: Twitter }, { icon: GitHub }]}
          mb={[1, 2]}
        />
      )}
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
      logo={() => <DummyLogo height="logo.medium" />}
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
      social={() => (
        <FlexList
          render={value => value.icon()}
          values={[{ icon: Twitter }, { icon: GitHub }]}
          mb={[1, 2]}
        />
      )}
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
