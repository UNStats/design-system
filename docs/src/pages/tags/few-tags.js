import React from 'react';
import { ThemeProvider } from 'theme-ui';
import preset from '@theme-ui/preset-base';
import { Tags } from '@undataforum/components';

const FewTags = () => (
  <ThemeProvider theme={preset}>
    <Tags
      values={[
        { tag: 'blue', path: '/tags/blue/' },
        { tag: 'red', path: '/tags/red/' },
        { tag: 'green', path: '/tags/green/' },
        { tag: 'yellow', path: '/tags/yellow/' },
      ]}
      m={2}
    />
  </ThemeProvider>
);

export default FewTags;
