import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'rebass';
import { Shapes } from '../../tokens';
import Header from './Header';

storiesOf('Components/Header', module)
  .add('logo and title', () => (
    <Header
      logo={() => <Shapes height="100%" mr={[2, 3]} />}
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
    />
  ))
  .add('logo only', () => (
    <Header
      logo={() => <Shapes height="100%" mr={[2, 3]} />}
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
    />
  ))

  .add('no button', () => (
    <Header
      logo={() => <Shapes height="100%" mr={[2, 3]} />}
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
    />
  ))
  .add('many links with button', () => (
    <Header
      logo={() => <Shapes height="100%" mr={[2, 3]} />}
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
    />
  ))
  .add('many links without button', () => (
    <Header
      logo={() => <Shapes height="100%" mr={[2, 3]} />}
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
    />
  ))
  .add('custom color', () => (
    <Header
      logo={() => <Shapes color="background" height="100%" mr={[2, 3]} />}
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
      color="background"
      bg="green"
    />
  ))
  .add('transparent background', () => (
    <Box bg="gray">
      <Header
        logo={() => <Shapes height="100%" mr={[2, 3]} />}
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
        transparent
      />
    </Box>
  ));
