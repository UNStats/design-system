import React from 'react';
import { ThemeProvider } from 'theme-ui';
import preset from '@undataforum/preset';
import { Tags } from '@undataforum/components';

const CustomizedWithPreset = () => (
  <ThemeProvider theme={preset}>
    <Tags
      values={[
        { tag: 'blue', path: '/tags/blue/' },
        { tag: 'red', path: '/tags/red/' },
        { tag: 'green', path: '/tags/green/' },
        { tag: 'yellow', path: '/tags/yellow/' },
      ]}
      variant="tags.secondary"
      m={2}
    />
  </ThemeProvider>
);

export default CustomizedWithPreset;
