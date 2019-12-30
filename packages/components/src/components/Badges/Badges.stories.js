import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Box } from '@theme-ui/components';

import Badges, { alignments } from './Badges';

storiesOf('Components/Badges', module)
  .addDecorator(withKnobs)
  .add('a few badges', () => {
    return (
      <Box sx={{ fontFamily: 'body' }}>
        <Badges
          values={['Design Engineer', 'Recruiter', 'Teacher', 'Scientist']}
          color="background"
          bg={select('bg', ['primary', 'secondary', 'accent'], 'primary')}
          align={select('align', alignments, 'flex-start')}
          m={2}
        />
      </Box>
    );
  })
  .add('outline', () => {
    return (
      <Box sx={{ fontFamily: 'body' }}>
        <Badges
          values={['Design Engineer', 'Recruiter', 'Teacher', 'Scientist']}
          color={select('color', ['primary', 'secondary', 'accent'], 'primary')}
          bg="background"
          align={select('align', alignments, 'flex-start')}
          variant="outline"
          m={2}
        />
      </Box>
    );
  })
  .add('many badges', () => (
    <Box sx={{ fontFamily: 'body' }}>
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
        color="background"
        bg={select('bg', ['primary', 'secondary', 'accent'], 'primary')}
        align={select('align', alignments, 'flex-start')}
        m={2}
      />
    </Box>
  ));
