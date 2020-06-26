import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { Header } from '@undataforum/components';
import preset from '@undataforum/preset';
import { Logo } from '@undataforum/assets';

const CustomizeWithPreset = () => (
  <ThemeProvider theme={preset}>
    <Header
      logo={<Logo scaleTo="height" />}
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

export default CustomizeWithPreset;
