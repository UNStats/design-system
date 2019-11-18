import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Box } from '@theme-ui/components';

import DummyLogo from '../DummyLogo';

import Header, { variants } from './Header';

storiesOf('Components/Header', module)
  .addDecorator(withKnobs)
  .add('logo and title', () => (
    <Box bg="orange">
      <Header
        logo={() => <DummyLogo scaleTo="height" />}
        title="Header Title"
        links={[
          {
            href: '/about',
            text: 'About',
          },
          {
            href: '/blog',
            text: 'Blog',
          },
          {
            href: '/2020',
            text: '2020',
          },
        ]}
        button={{ text: 'Register', href: '/register' }}
        variant={select('variant', variants, 'branded')}
      />
    </Box>
  ))
  .add('logo only', () => (
    <Box bg="orange">
      <Header
        logo={() => <DummyLogo scaleTo="height" />}
        links={[
          {
            href: '/about',
            text: 'About',
          },
          {
            href: '/blog',
            text: 'Blog',
          },
          {
            href: '/2020',
            text: '2020',
          },
        ]}
        button={{ text: 'Register', href: '/register' }}
        variant={select('variant', variants, 'branded')}
      />
    </Box>
  ))
  .add('title only', () => (
    <Box bg="orange">
      <Header
        title="Header Title"
        links={[
          {
            href: '/about',
            text: 'About',
          },
          {
            href: '/blog',
            text: 'Blog',
          },
          {
            href: '/2020',
            text: '2020',
          },
        ]}
        button={{ text: 'Register', href: '/register' }}
        variant={select('variant', variants, 'branded')}
      />
    </Box>
  ))
  .add('no logo and no title', () => (
    <Box bg="orange">
      <Header
        links={[
          {
            href: '/about',
            text: 'About',
          },
          {
            href: '/blog',
            text: 'Blog',
          },
          {
            href: '/2020',
            text: '2020',
          },
        ]}
        button={{ text: 'Register', href: '/register' }}
        variant={select('variant', variants, 'branded')}
      />
    </Box>
  ))
  .add('no button', () => (
    <Box bg="orange">
      <Header
        logo={() => <DummyLogo scaleTo="height" />}
        title="Header Title"
        links={[
          {
            href: '/about',
            text: 'About',
          },
          {
            href: '/blog',
            text: 'Blog',
          },
          {
            href: '/2020',
            text: '2020',
          },
        ]}
        variant={select('variant', variants, 'branded')}
      />
    </Box>
  ))
  .add('many links with button', () => (
    <Box bg="orange">
      <Header
        logo={() => <DummyLogo scaleTo="height" />}
        title="Header Title"
        links={[
          { text: 'One', href: '/1' },
          { text: 'Two', href: '/2' },
          { text: 'Three', href: '/3' },
          { text: 'Four', href: '/4' },
          { text: 'Five', href: '/5' },
          { text: 'Six', href: '/6' },
          { text: 'Seven', href: '/7' },
          { text: 'Eight', href: '/8' },
          { text: 'Nine', href: '/9' },
          { text: 'Ten', href: '/10' },
          { text: 'Eleven', href: '/11' },
          { text: 'Twelve', href: '/12' },
          { text: 'Thirteen', href: '/13' },
          { text: 'Fourteen', href: '/14' },
          { text: 'Fifteen', href: '/15' },
        ]}
        button={{ text: 'Register', href: '/register' }}
        variant={select('variant', variants, 'branded')}
      />
    </Box>
  ))
  .add('many links without button', () => (
    <Box bg="orange">
      <Header
        logo={() => <DummyLogo scaleTo="height" />}
        title="Header Title"
        links={[
          { text: 'One', href: '/1' },
          { text: 'Two', href: '/2' },
          { text: 'Three', href: '/3' },
          { text: 'Four', href: '/4' },
          { text: 'Five', href: '/5' },
          { text: 'Six', href: '/6' },
          { text: 'Seven', href: '/7' },
          { text: 'Eight', href: '/8' },
          { text: 'Nine', href: '/9' },
          { text: 'Ten', href: '/10' },
          { text: 'Eleven', href: '/11' },
          { text: 'Twelve', href: '/12' },
          { text: 'Thirteen', href: '/13' },
          { text: 'Fourteen', href: '/14' },
          { text: 'Fifteen', href: '/15' },
        ]}
        variant={select('variant', variants, 'branded')}
      />
    </Box>
  ))
  .add('adjust height', () => (
    <Box bg="orange">
      <Header
        logo={() => <DummyLogo scaleTo="height" />}
        links={[
          {
            href: '/about',
            text: 'About',
          },
          {
            href: '/blog',
            text: 'Blog',
          },
          {
            href: '/2020',
            text: '2020',
          },
        ]}
        button={{ text: 'Register', href: '/register' }}
        height={[64, 128, 256]}
        variant={select('variant', variants, 'branded')}
      />
    </Box>
  ));
