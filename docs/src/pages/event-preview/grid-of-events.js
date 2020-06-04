import React from 'react';
import { Container, Grid, Heading, Text } from 'theme-ui';
import { EventPreview, Names } from '@undataforum/components';

const events = [
  {
    id: '0e0dde9c-1cb3-4bbf-a070-d3b838d98398',
    tag: 'Webinar',
    title: (
      <Heading as="h2" mb={3}>
        Ut aut reiciendis voluptatibus maiores alias consequatur
      </Heading>
    ),
    speakers: (
      <Names
        values={[
          'Inglebert Mc Menamin (Moderator)',
          'Allyn Minmagh (Moderator)',
          'Jacintha Tack',
          'Nikki Jamieson',
        ]}
        mb={3}
      />
    ),
    date: 'Display date',
    duration: 'display duration',
    description: (
      <Text as="p" variant="text.default" mb={3}>
        Totam rem aperiam. Inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit.
      </Text>
    ),
    href: '/events/ut-aut-reiciendis',
    registrationLink: '/register',
  },
  {
    id: 'c539b355-4729-4d8f-88eb-ee955e1ae832',
    tag: 'Session',
    title: (
      <Heading as="h2" mb={3}>
        Do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </Heading>
    ),
    speakers: <Names values={['Galina Misselbrook', 'Etti Clapson']} mb={3} />,
    date: 'Display date',
    duration: 'display duration',
    description: (
      <Text as="p" variant="text.default" mb={3}>
        Laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Animi, id est laborum et dolorum fuga. Quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco. Accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
      </Text>
    ),
    href: '/events/do-eiusmod-tempor',
  },
  {
    id: '60b7bd4e-b6d1-4f49-8f0a-4aaff9e55015',
    tag: 'Workshop',
    title: (
      <Heading as="h2" mb={3}>
        Et harum quidem rerum facilis est et expedita distinctio
      </Heading>
    ),
    speakers: <Names values={['Berti Bantham']} mb={3} />,
    date: 'Display date',
    duration: 'display duration',
    description: (
      <Text as="p" variant="text.default" mb={3}>
        Corrupti quos dolores et quas molestias excepturi sint occaecati. Animi,
        id est laborum et dolorum fuga. Temporibus autem quibusdam et aut
        officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
        repudiandae sint et molestiae non recusandae. Accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo.
      </Text>
    ),
    href: '/events/et-harum-quidem',
  },
  {
    id: 'e87d27fd-53e5-438a-93c0-32ea28e91f1a',
    tag: 'Panel',
    title: (
      <Heading as="h2" mb={3}>
        Itaque earum rerum hic tenetur a sapiente delectus
      </Heading>
    ),
    speakers: (
      <Names
        values={['Dewitt Milliere', 'Sigfried Slyvester', 'Melicent Pereira']}
        mb={3}
      />
    ),
    date: 'Display date',
    duration: 'display duration',
    description: (
      <Text as="p" variant="text.default" mb={3}>
        Nisi ut aliquid ex ea commodi consequatur? Facere possimus, omnis
        voluptas assumenda est, omnis dolor repellendus. Quis autem vel eum iure
        reprehenderit qui in ea voluptate velit esse quam.
      </Text>
    ),
    href: '/events/itaque-earum-rerum',
  },
];

const GridOfEvents = () => (
  <Container my={3}>
    <Grid gap={4} columns={[1, null, 2]}>
      {events.map(({ id, ...event }) => (
        <EventPreview
          event={{ ...event }}
          colors={{
            text: 'text',
            background: 'background',
            accent: 'secondary',
          }}
          key={id}
        />
      ))}
    </Grid>
  </Container>
);

export default GridOfEvents;
