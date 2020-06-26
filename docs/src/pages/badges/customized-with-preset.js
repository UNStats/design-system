import React from 'react';
import { ThemeProvider } from 'theme-ui';
import preset from '@undataforum/preset';
import { Badges } from '@undataforum/components';

const CustomizedWithPreset = () => (
  <ThemeProvider theme={preset}>
    <Badges
      values={['Design Engineer', 'Recruiter', 'Teacher', 'Scientist']}
      variant="badges.secondary"
      m={2}
    />
  </ThemeProvider>
);

export default CustomizedWithPreset;
