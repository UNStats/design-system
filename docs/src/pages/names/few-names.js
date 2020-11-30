import React from 'react';
import { ThemeProvider } from 'theme-ui';
import preset from '@undataforum/preset';
import { Names } from '@undataforum/components';

const FewNames = () => (
  <ThemeProvider theme={preset}>
    <Names
      values={[
        'Berenice Feldmus',
        'Sidonnie Halbeard',
        'Jacenta Busch',
        'Mercie Kuban',
        'Candis Ruggs',
      ]}
      m={2}
    />
  </ThemeProvider>
);

export default FewNames;
