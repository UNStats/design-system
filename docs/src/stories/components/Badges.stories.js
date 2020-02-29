import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Box } from 'theme-ui';
import { Badges } from '@undataforum/components';

const alignments = ['start', 'center', 'end'];
const variants = ['primary', 'secondary'];

storiesOf('Components/Badges', module)
  .addDecorator(withKnobs)
  .add('a few badges', () => (
    <Box sx={{ fontFamily: 'body' }}>
      <Badges
        values={['Design Engineer', 'Recruiter', 'Teacher', 'Scientist']}
        align={select('align', alignments, 'flex-start')}
        variant={select('variant', variants, 'primary')}
        m={2}
      />
    </Box>
  ))
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
        align={select('align', alignments, 'flex-start')}
        variant={select('variant', variants, 'primary')}
        m={2}
      />
    </Box>
  ));
