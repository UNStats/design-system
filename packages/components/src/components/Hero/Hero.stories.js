import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card, Heading, Image } from '@theme-ui/components';

import EventPreview from '../EventPreview';
import DummyLogo from '../DummyLogo';
import Names from '../Names';

import Hero from './Hero';

const image = () => (
  <Image
    sx={{
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      objectPosition: 'center center',
    }}
    src="/emiliano-bar-kheTI8pIywU-unsplash.jpg"
  />
);

const logo = () => <DummyLogo scaleTo="height" />;

const promo = () => (
  <Card sx={{ maxWidth: 512, variant: 'pairings.branded' }}>
    <EventPreview
      event={{
        type: 'Webinar',
        title() {
          return (
            <Heading as="h1" sx={{ fontSize: [4, 5], mb: 3 }}>
              Vestibulum proin eu mi nulla ac enim in tempor turpis
            </Heading>
          );
        },
        date: 'October 14, 1983, 1:30 PM EDT',
        duration: '60 minutes',
        speakers() {
          return <Names values={['Willow Rangall', 'Suzy Cahan']} mb={3} />;
        },
        links: {
          page: '/events/vestibulum-proin-eu',
          registration: '/register',
        },
      }}
    />
  </Card>
);

storiesOf('Components/Hero', module)
  .add('with action', () => (
    <Hero
      image={image}
      logo={logo}
      text="Itaque earum rerum hic tenetur a sapiente delectus"
      action={{
        text: 'Submit your proposal',
        href: '/2020/call-for-proposals',
      }}
      promo={promo}
    />
  ))
  .add('without action', () => (
    <Hero
      image={image}
      logo={logo}
      text="Itaque earum rerum hic tenetur a sapiente delectus"
      promo={promo}
    />
  ));
