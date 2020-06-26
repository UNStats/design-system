import React from 'react';
import { ThemeProvider } from 'theme-ui';
import preset from '@theme-ui/preset-base';
import { Badges } from '@undataforum/components';

const FewBadges = () => (
  <ThemeProvider theme={preset}>
    <Badges
      values={['Design Engineer', 'Recruiter', 'Teacher', 'Scientist']}
      m={2}
    />
  </ThemeProvider>
);

export default FewBadges;
