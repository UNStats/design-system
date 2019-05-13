import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Navigation from './Navigation';

storiesOf('Components/Navigation', module)
  .addDecorator(withKnobs)
  .add('with button', () => (
    <Navigation
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
      open={select('open', { true: true, false: false }, true)}
      color="primary"
      bg="background"
    />
  ))
  .add('without button', () => (
    <Navigation
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
      open={select('open', { true: true, false: false }, true)}
      color="primary"
      bg="background"
    />
  ))
  .add('many links with button', () => (
    <Navigation
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
      open={select('open', { true: true, false: false }, true)}
      color="primary"
      bg="background"
    />
  ))
  .add('many links without button', () => (
    <Navigation
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
      open={select('open', { true: true, false: false }, true)}
      color="primary"
      bg="background"
    />
  ))
  .add('another color', () => (
    <Navigation
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
      open={select('open', { true: true, false: false }, true)}
      color="background"
      bg="red"
    />
  ));
