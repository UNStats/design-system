import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { DummyLogo } from '../../helpers';
import FlexList from '../FlexList';
import { GitHubIcon, TwitterIcon } from '../../icons';
import SmartLink from '../SmartLink';
import Footer from './Footer';

const modes = {
  primary: 'primary',
  secondary: 'secondary',
  blue: 'blue',
  green: 'green',
  red: 'red',
  yellow: 'yellow',
};

const renderGitHubIcon = () => (
  <SmartLink href="https://github.com/UNDataForum" color="inherit" key="github">
    <GitHubIcon width={[32, 48]} p={[1, 2]} />
  </SmartLink>
);

const renderTwitterIcon = () => (
  <SmartLink
    href="https://twitter.com/UNDataForum"
    color="inherit"
    key="twitter"
  >
    <TwitterIcon width={[32, 48]} p={[1, 2]} />
  </SmartLink>
);

storiesOf('Components/Footer', module)
  .addDecorator(withKnobs)
  .add('everything', () => (
    <Footer
      logo={() => <DummyLogo height={3} />}
      title="Footer Title"
      social={() => (
        <FlexList
          render={icon => icon.render()}
          values={[{ render: renderTwitterIcon }, { render: renderGitHubIcon }]}
          mb={[1, 2]}
        />
      )}
      links={[
        { text: 'Contact', href: '/contact' },
        { text: 'Copyright', href: '/copyright' },
        { text: 'Privacy Notice', href: '/privacy' },
        { text: 'Terms of Use', href: '/terms' },
      ]}
      mode={select('mode', modes, 'primary')}
    />
  ))
  .add('logo only', () => (
    <Footer
      logo={() => <DummyLogo height={3} />}
      links={[
        { text: 'Contact', href: '/contact' },
        { text: 'Copyright', href: '/copyright' },
        { text: 'Fraud Alert', href: '/fraud-alert' },
        { text: 'Privacy Notice', href: '/privacy-notice' },
        { text: 'Terms of Use', href: '/terms-of-use' },
      ]}
      mode={select('mode', modes, 'primary')}
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
      mode={select('mode', modes, 'primary')}
    />
  ))
  .add('social only', () => (
    <Footer
      social={() => (
        <FlexList
          render={renderIcon => renderIcon()}
          values={[renderTwitterIcon, renderGitHubIcon]}
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
      mode={select('mode', modes, 'primary')}
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
      mode={select('mode', modes, 'primary')}
    />
  ))
  .add('custom mode', () => (
    <Footer
      logo={() => <DummyLogo height={3} />}
      title="Footer Title"
      social={() => (
        <FlexList
          render={renderIcon => renderIcon()}
          values={[renderTwitterIcon, renderGitHubIcon]}
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
      mode={select('mode', modes, 'yellow')}
    />
  ));
