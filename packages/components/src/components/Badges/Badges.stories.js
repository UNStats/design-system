import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { alignments } from '../../types';

import Badges from './Badges';

storiesOf('Components/Badges', module)
  .addDecorator(withKnobs)
  .add('a few badges', () => {
    return (
      <Badges
        values={[
          { text: 'Design Engineer' },
          { text: 'Recruiter', variant: 'secondary' },
          { text: 'Teacher', variant: 'accent' },
          { text: 'Scientist', variant: 'inverse' },
        ]}
        variant={select('variant', alignments, 'center')}
        m={2}
      />
    );
  })
  .add('many badges', () => (
    <Badges
      values={[
        { text: 'Design Engineer' },
        { text: 'Recruiter', variant: 'secondary' },
        { text: 'Teacher', variant: 'accent' },
        { text: 'Environmental Specialist', variant: 'inverse' },
        { text: 'Nuclear Power Engineer' },
        { text: 'Cost Accountant', variant: 'secondary' },
        { text: 'VP Marketing', variant: 'accent' },
        { text: 'Automation Specialist', variant: 'inverse' },
        { text: 'Analog Circuit Design Manager' },
        { text: 'Senior Cost Accountant', variant: 'secondary' },
        { text: 'Desktop Support Technician', variant: 'accent' },
        { text: 'Web Developer', variant: 'inverse' },
        { text: 'Technical Writer' },
        { text: 'Database Administrator', variant: 'secondary' },
        { text: 'Systems Administrator', variant: 'accent' },
        { text: 'Assistant Manager', variant: 'inverse' },
      ]}
      variant={select('variant', alignments, 'center')}
      m={2}
    />
  ));
