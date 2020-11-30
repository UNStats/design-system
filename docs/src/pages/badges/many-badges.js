import React from 'react';
import { ThemeProvider } from 'theme-ui';
import preset from '@undataforum/preset';
import { Badges } from '@undataforum/components';

const ManyBadges = () => (
  <ThemeProvider theme={preset}>
    <Badges
      values={[
        'Design Engineer',
        'Recruiter',
        'Teacher',
        'Environmental Specialist',
        'Nuclear Power Engineer',
        'Cost Accountant',
        'VP Marketing',
        'Automation Specialist',
        'Analog Circuit Design Manager',
        'Senior Cost Accountant',
        'Desktop Support Technician',
        'Web Developer',
        'Technical Writer',
        'Database Administrator',
        'Systems Administrator',
        'Assistant Manager',
      ]}
      m={2}
    />
  </ThemeProvider>
);

export default ManyBadges;
