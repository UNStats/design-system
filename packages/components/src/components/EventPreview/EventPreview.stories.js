import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading, Image, Text } from '@theme-ui/components';
import GridList from '../GridList';
import ProfilePreview from '../ProfilePreview';
import EventPreview from './EventPreview';

storiesOf('Components/EventPreview', module)
  .add('render speakers with Text', () => (
    <EventPreview
      event={{
        type: 'Webinar',
        title() {
          return (
            <Heading as="h1" sx={{ mb: 3 }}>
              Vestibulum proin eu mi nulla ac enim in tempor turpis
            </Heading>
          );
        },
        date: 'October 14, 1983, 1:30 PM EDT',
        duration: '60 minutes',
        speakers() {
          return (
            <Text
              as="div"
              sx={{ fontFamily: 'body', lineHeight: 'body', mb: 3 }}
            >
              {['Willow Rangall', 'Suzy Cahan'].join(', ')}
            </Text>
          );
        },
        links: {
          page: '/events/vestibulum-proin-eu',
          registration: '/register',
        },
      }}
      m={2}
    />
  ))
  .add('render speakers with GridList', () => (
    <EventPreview
      event={{
        type: 'Webinar',
        title() {
          return (
            <Heading as="h1" sx={{ color: 'text', mt: 0, mb: 3 }}>
              Vestibulum proin eu mi nulla ac enim in tempor turpis
            </Heading>
          );
        },
        date: 'October 14, 1983, 1:30 PM EDT',
        duration: '90 minutes',
        speakers() {
          return (
            <GridList
              align="left"
              gridGap={2}
              gridTemplateColumns="repeat(auto-fit, 96px)"
              render={({ id, ...author }) => (
                <ProfilePreview
                  profile={author}
                  align="left"
                  fontSize={1}
                  key={id}
                />
              )}
              values={[
                {
                  id: 'a6b4babd-6b11-4b81-8ac0-73cefb040cb7',
                  avatar() {
                    return (
                      <Image
                        alt="Willow Rangall"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar0.png"
                      />
                    );
                  },
                  name: 'Willow Rangall',
                  href: '/profiles/willow-rangall',
                },
                {
                  id: '561285d3-4eed-473c-baba-6b3564f4e6a7',
                  avatar() {
                    return (
                      <Image
                        alt="Suzy Cahan"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar1.png"
                      />
                    );
                  },
                  name: 'Suzy Cahan',
                  href: '/profiles/suzy-cahan',
                },
                {
                  id: '453d9d8a-b1e6-4cac-9fdd-b6c354fa3262',
                  avatar() {
                    return (
                      <Image
                        alt="Sandra Abramovici"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar2.png"
                      />
                    );
                  },
                  name: 'Sandra Abramovici',
                  href: '/profiles/sandra-abramovici',
                },
              ]}
              mb={3}
            />
          );
        },
        description() {
          return (
            <Text
              as="p"
              sx={{ color: 'text', fontFamily: 'body', lineHeight: 'body' }}
            >
              Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed
              interdum venenatis, turpis enim blandit mi, in porttitor pede
              justo eu massa. Donec dapibus. Duis at velit eu est congue
              elementum. In hac habitasse platea dictumst. Morbi vestibulum,
              velit id pretium iaculis, diam erat fermentum justo, nec
              condimentum neque sapien placerat ante. Nulla justo.
            </Text>
          );
        },
        links: {
          registration: '/register',
        },
      }}
      m={2}
    />
  ));
