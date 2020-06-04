import React from 'react';
import { Heading } from 'theme-ui';
import { EventPreview, Names } from '@undataforum/components';

const RenderWithNames = () => (
  <EventPreview
    event={{
      tag: 'Webinar',
      title: (
        <Heading as="h1" mb={3}>
          Vestibulum proin eu mi nulla ac enim in tempor turpis
        </Heading>
      ),
      date: 'October 14, 1983, 1:30 PM EDT (60 minutes)',
      speakers: <Names values={['Willow Rangall', 'Suzy Cahan']} mb={3} />,
      href: '/events/vestibulum-proin-eu',
      registrationLink: '/register',
    }}
    m={2}
  />
);

export default RenderWithNames;
