import React from 'react';
import { Heading, Image, ThemeProvider } from 'theme-ui';
import preset from '@theme-ui/preset-base';
import { Avatars } from '@undataforum/components';

const FewAvatars = () => (
  <ThemeProvider theme={preset}>
    <Avatars
      values={[
        {
          id: '44494dbe-5262-4d8c-bc90-34c5e820e3aa',
          avatar: (
            <Image
              alt="Portrait of Berenice Feldmus"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar0.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Berenice Feldmus
            </Heading>
          ),
          href: '/profiles/berenice-feldmus/',
        },
        {
          id: '8a9036f7-7d44-4080-a44a-ec6626654764',
          avatar: (
            <Image
              alt="Portrait of Sidonnie Halbeard"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar1.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Sidonnie Halbeard
            </Heading>
          ),
          href: '/profiles/sidonnie-halbeard/',
        },
        {
          id: 'b1bf65d0-887e-492c-986f-a23c10843b1b',
          avatar: (
            <Image
              alt="Portrait of Jacenta Busch"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar2.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Jacenta Busch
            </Heading>
          ),
          href: '/profiles/jacenta-busch/',
        },
        {
          id: '365ad4ac-3a6e-448a-88b2-af1c6b99c0ca',
          avatar: (
            <Image
              alt="Portrait of Mercie Kuban"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar3.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Mercie Kuban
            </Heading>
          ),
          href: '/profiles/mercie-kuban/',
        },
        {
          id: '05f4fbf0-5724-4fb5-8d37-265046d2a463',
          avatar: (
            <Image
              alt="Portrait of Candis Ruggs"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar4.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Candis Ruggs
            </Heading>
          ),
          href: '/profiles/candis-ruggs/',
        },
      ]}
      m={2}
    />
  </ThemeProvider>
);

export default FewAvatars;
