import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { Header } from '@undataforum/components';
import preset from '@theme-ui/preset-base';

import DummyLogo from '../../components/dummy-logo';

const ManyLinksNoButton = () => (
  <ThemeProvider theme={preset}>
    <Header
      logo={<DummyLogo scaleTo="height" />}
      title="Title"
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
  </ThemeProvider>
);

export default ManyLinksNoButton;
