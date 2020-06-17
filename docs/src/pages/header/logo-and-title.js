import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { Header } from '@undataforum/components';
import preset from '@theme-ui/preset-base';

import DummyLogo from '../../components/dummy-logo';

const LogoAndTitle = () => (
  <ThemeProvider theme={preset}>
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

export default LogoAndTitle;
