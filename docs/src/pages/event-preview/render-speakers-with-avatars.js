import React from 'react';
import { Heading, Image, Text } from 'theme-ui';
import { Avatars, EventPreview } from '@undataforum/components';

const RenderWithAvatars = () => (
  <EventPreview
    event={{
      tag: 'Webinar',
      title: (
        <Heading as="h1" mb={3}>
          Vestibulum proin eu mi nulla ac enim in tempor turpis
        </Heading>
      ),
      date: 'October 14, 1983, 1:30 PM EDT (90 minutes)',
      speakers: (
        <Avatars
          values={[
            {
              id: 'a6b4babd-6b11-4b81-8ac0-73cefb040cb7',
              avatar: (
                <Image
                  alt="Portrait of Willow Rangall"
                  sx={{ borderRadius: '50%', height: 64, width: 64 }}
                  src="/avatar0.png"
                />
              ),
              name: 'Willow Rangall (Moderator)',
              href: '/profiles/willow-rangall',
            },
            {
              id: '561285d3-4eed-473c-baba-6b3564f4e6a7',
              avatar: (
                <Image
                  alt="Portrait of Suzy Cahan"
                  sx={{ borderRadius: '50%', height: 64, width: 64 }}
                  src="/avatar1.png"
                />
              ),
              name: 'Suzy Cahan',
              href: '/profiles/suzy-cahan',
            },
            {
              id: '453d9d8a-b1e6-4cac-9fdd-b6c354fa3262',
              avatar: (
                <Image
                  alt="Portrait of Sandra Abramovici"
                  sx={{ borderRadius: '50%', height: 64, width: 64 }}
                  src="/avatar2.png"
                />
              ),
              name: 'Sandra Abramovici',
              href: '/profiles/sandra-abramovici',
            },
          ]}
          align="start"
          mb={3}
        />
      ),
      description: (
        <Text as="p" variant="text.default" mb={3}>
          Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed
          interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu
          massa. Donec dapibus. Duis at velit eu est congue elementum. In hac
          habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis,
          diam erat fermentum justo, nec condimentum neque sapien placerat ante.
          Nulla justo.
        </Text>
      ),
      registrationLink: '/register',
    }}
    m={2}
  />
);

export default RenderWithAvatars;
