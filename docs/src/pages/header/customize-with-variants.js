import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { Header } from '@undataforum/components';
import preset from '@theme-ui/preset-base';
import merge from 'deepmerge';

import DummyLogo from '../../components/dummy-logo';

const theme = merge(preset, {
  header: {
    color: 'primary',
    bg: 'background',
    container: {
      maxWidth: '64em',
    },
    nav: {
      bg: 'background',
    },
    button: {
      borderRadius: 0,
      boxShadow: '0 0 0 2px inset',
    },
  },
});

const CustomizeWithVariants = () => (
  <ThemeProvider theme={theme}>
    <Header
      logo={<DummyLogo scaleTo="height" />}
      title="Title"
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
  </ThemeProvider>
);

export default CustomizeWithVariants;
