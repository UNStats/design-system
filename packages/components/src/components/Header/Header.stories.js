import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'rebass';
import { DummyLogo } from '../../helpers';
import Header from './Header';

storiesOf('Components/Header', module)
  .add('logo and title', () => (
    <Header
      logo={() => <DummyLogo height="100%" />}
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
      height={[64, 80, 96]}
    />
  ))
  .add('logo only', () => (
    <Header
      logo={() => <DummyLogo height="100%" />}
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
      height={[64, 80, 96]}
    />
  ))
  .add('title only', () => (
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
      height={[64, 80, 96]}
    />
  ))
  .add('no logo and no title', () => (
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
      height={[64, 80, 96]}
    />
  ))
  .add('no button', () => (
    <Header
      logo={() => <DummyLogo height="100%" />}
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
      height={[64, 80, 96]}
    />
  ))
  .add('many links with button', () => (
    <Header
      logo={() => <DummyLogo height="100%" />}
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
      height={[64, 80, 96]}
    />
  ))
  .add('many links without button', () => (
    <Header
      logo={() => <DummyLogo height="100%" />}
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
      height={[64, 80, 96]}
    />
  ))
  .add('custom color', () => (
    <Header
      logo={() => <DummyLogo height="100%" />}
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
      height={[64, 80, 96]}
      color="background"
      bg="green"
    />
  ))
  .add('transparent background', () => (
    <Box bg="gray">
      <Header
        logo={() => <DummyLogo height="100%" />}
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
        height={[64, 80, 96]}
        transparent
      />
    </Box>
  ))
  .add('adjust height', () => (
    <Box>
      <Header
        logo={() => <DummyLogo height="100%" />}
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
        color="background"
        bg="red"
      />
    </Box>
  ));
