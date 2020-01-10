import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Container, Grid, Heading, Image, Text } from '@theme-ui/components';

import Names from '../Names';
import Avatars from '../Avatars';

import EventPreview, { alignments } from './EventPreview';

storiesOf('Components/EventPreview', module)
  .addDecorator(withKnobs)
  .add('render speakers with Names', () => (
    <EventPreview
      event={{
        type: 'Webinar',
        title(align) {
          return (
            <Heading as="h1" sx={{ textAlign: align, mb: 3 }}>
              Vestibulum proin eu mi nulla ac enim in tempor turpis
            </Heading>
          );
        },
        date: 'October 14, 1983, 1:30 PM EDT',
        duration: '60 minutes',
        speakers(align) {
          return (
            <Names
              values={['Willow Rangall', 'Suzy Cahan']}
              align={align}
              mb={3}
            />
          );
        },
        links: {
          page: '/events/vestibulum-proin-eu',
          registration: '/register',
        },
      }}
      align={select('align', alignments, 'start')}
      m={2}
    />
  ))
  .add('render speakers with Avatars', () => (
    <EventPreview
      event={{
        type: 'Webinar',
        title(align) {
          return (
            <Heading as="h1" sx={{ textAlign: align, mb: 3 }}>
              Vestibulum proin eu mi nulla ac enim in tempor turpis
            </Heading>
          );
        },
        date: 'October 14, 1983, 1:30 PM EDT',
        duration: '90 minutes',
        speakers(align) {
          return (
            <Avatars
              values={[
                {
                  id: 'a6b4babd-6b11-4b81-8ac0-73cefb040cb7',
                  avatar() {
                    return (
                      <Image
                        alt="Portrait of Willow Rangall"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar0.png"
                      />
                    );
                  },
                  name: 'Willow Rangall (Moderator)',
                  href: '/profiles/willow-rangall',
                },
                {
                  id: '561285d3-4eed-473c-baba-6b3564f4e6a7',
                  avatar() {
                    return (
                      <Image
                        alt="Portrait of Suzy Cahan"
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
                        alt="Portrait of Sandra Abramovici"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar2.png"
                      />
                    );
                  },
                  name: 'Sandra Abramovici',
                  href: '/profiles/sandra-abramovici',
                },
              ]}
              align={align}
              mb={3}
            />
          );
        },
        description(align) {
          return (
            <Text as="p" sx={{ lineHeight: 'body', textAlign: align, mb: 3 }}>
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
      align={select('align', alignments, 'start')}
      m={2}
    />
  ))
  .add('grid of events', () => {
    const events = [
      {
        id: '0e0dde9c-1cb3-4bbf-a070-d3b838d98398',
        type: 'Webinar',
        title(align) {
          return (
            <Heading as="h1" sx={{ textAlign: align, mb: 3 }}>
              Ut aut reiciendis voluptatibus maiores alias consequatur
            </Heading>
          );
        },
        speakers(align) {
          return (
            <Names
              align={align}
              values={[
                'Inglebert Mc Menamin (Moderator)',
                'Allyn Minmagh (Moderator)',
                'Jacintha Tack',
                'Nikki Jamieson',
              ]}
              mb={3}
            />
          );
        },
        date: 'Display date',
        duration: 'display duration',
        description(align) {
          return (
            <Text as="p" sx={{ lineHeight: 'body', textAlign: align, mb: 3 }}>
              Totam rem aperiam. Inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </Text>
          );
        },
        links: {
          page: '/events/ut-aut-reiciendis',
          registration: '/register',
        },
      },
      {
        id: 'c539b355-4729-4d8f-88eb-ee955e1ae832',
        type: 'Session',
        title(align) {
          return (
            <Heading as="h1" sx={{ textAlign: align, mb: 3 }}>
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Heading>
          );
        },
        speakers(align) {
          return (
            <Names
              align={align}
              values={['Galina Misselbrook', 'Etti Clapson']}
              mb={3}
            />
          );
        },
        date: 'Display date',
        duration: 'display duration',
        description(align) {
          return (
            <Text as="p" sx={{ lineHeight: 'body', textAlign: align, mb: 3 }}>
              Laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Animi, id est laborum et dolorum
              fuga. Quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco. Accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo.
            </Text>
          );
        },
        links: {
          page: '/events/do-eiusmod-tempor',
        },
      },
      {
        id: '60b7bd4e-b6d1-4f49-8f0a-4aaff9e55015',
        type: 'Workshop',
        title(align) {
          return (
            <Heading as="h1" sx={{ textAlign: align, mb: 3 }}>
              Et harum quidem rerum facilis est et expedita distinctio
            </Heading>
          );
        },
        speakers(align) {
          return <Names align={align} values={['Berti Bantham']} mb={3} />;
        },
        date: 'Display date',
        duration: 'display duration',
        description(align) {
          return (
            <Text as="p" sx={{ lineHeight: 'body', textAlign: align, mb: 3 }}>
              Corrupti quos dolores et quas molestias excepturi sint occaecati.
              Animi, id est laborum et dolorum fuga. Temporibus autem quibusdam
              et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
              et voluptates repudiandae sint et molestiae non recusandae.
              Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo.
            </Text>
          );
        },
        links: {
          page: '/events/et-harum-quidem',
        },
      },
      {
        id: 'e87d27fd-53e5-438a-93c0-32ea28e91f1a',
        type: 'Panel',
        title(align) {
          return (
            <Heading as="h1" sx={{ textAlign: align, mb: 3 }}>
              Itaque earum rerum hic tenetur a sapiente delectus
            </Heading>
          );
        },
        speakers(align) {
          return (
            <Names
              align={align}
              values={[
                'Dewitt Milliere',
                'Sigfried Slyvester',
                'Melicent Pereira',
              ]}
              mb={3}
            />
          );
        },
        date: 'Display date',
        duration: 'display duration',
        description(align) {
          return (
            <Text as="p" sx={{ lineHeight: 'body', textAlign: align, mb: 3 }}>
              Nisi ut aliquid ex ea commodi consequatur? Facere possimus, omnis
              voluptas assumenda est, omnis dolor repellendus. Quis autem vel
              eum iure reprehenderit qui in ea voluptate velit esse quam.
            </Text>
          );
        },
        links: {
          page: '/events/itaque-earum-rerum',
        },
      },
    ];
    return (
      <Container
        sx={{
          maxWidth: 'width.default',
          my: [2, 3, 4],
          px: [2, 3, 4],
        }}
      >
        <Grid gap={4} columns={[1, null, 2]}>
          {events.map(({ id, ...event }) => (
            <EventPreview
              event={{ ...event }}
              colors={{
                text: 'text',
                background: 'background',
                accent: 'secondary',
              }}
              align={select('align', alignments, 'start')}
              key={id}
            />
          ))}
        </Grid>
      </Container>
    );
  })
  .add('custom colors', () => (
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
        duration: '90 minutes',
        speakers() {
          return (
            <Avatars
              values={[
                {
                  id: 'a6b4babd-6b11-4b81-8ac0-73cefb040cb7',
                  avatar() {
                    return (
                      <Image
                        alt="Portrait of Willow Rangall"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar0.png"
                      />
                    );
                  },
                  name: 'Willow Rangall (Moderator)',
                  href: '/profiles/willow-rangall',
                },
                {
                  id: '561285d3-4eed-473c-baba-6b3564f4e6a7',
                  avatar() {
                    return (
                      <Image
                        alt="Portrait of Suzy Cahan"
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
                        alt="Portrait of Sandra Abramovici"
                        sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                        src="/avatar2.png"
                      />
                    );
                  },
                  name: 'Sandra Abramovici',
                  href: '/profiles/sandra-abramovici',
                },
              ]}
              colors={{
                text: 'background',
                background: 'secondary',
                accent: 'background',
              }}
              mb={3}
            />
          );
        },
        description() {
          return (
            <Text as="p" sx={{ lineHeight: 'body', mb: 3 }}>
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
      colors={{
        text: 'background',
        background: 'secondary',
        accent: 'background',
      }}
      p={2}
    />
  ));
