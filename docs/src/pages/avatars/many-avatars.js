import React from 'react';
import { Heading, Image, ThemeProvider } from 'theme-ui';
import preset from '@theme-ui/preset-base';
import { Avatars } from '@undataforum/components';

const ManyAvatars = () => (
  <ThemeProvider theme={preset}>
    <Avatars
      values={[
        {
          id: '50efe1ed-5639-4b43-a118-b9caf1a9e719',
          avatar: (
            <Image
              alt="Portrait of Pippa Rawkesby"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar5.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Pippa Rawkesby
            </Heading>
          ),
          href: '/profiles/pippa-rawkesby/',
        },
        {
          id: 'b6846de6-6ccb-4d12-a994-67dc7b7606f3',
          avatar: (
            <Image
              alt="Portrait of Issie Kisby"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar6.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Issie Kisby
            </Heading>
          ),
          href: '/profiles/issie-kisby/',
        },
        {
          id: '98487ed0-f1e5-4da6-9d81-2a5ed257d5d7',
          avatar: (
            <Image
              alt="Portrait of Josee Lyven"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar7.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Josee Lyven
            </Heading>
          ),
          href: '/profiles/josee-lyven/',
        },
        {
          id: '11c7c6e5-2af1-4005-8a14-d9b7cdf9b6d0xx',
          avatar: (
            <Image
              alt="Portrait of Barton Pentecost"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar8.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Barton Pentecost
            </Heading>
          ),
          href: '/profiles/barton-pentecost/',
        },
        {
          id: '574afbf7-4e72-4f61-bfe2-320efd4a06eb',
          avatar: (
            <Image
              alt="Portrait of Grier Dorman"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar9.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Grier Dorman
            </Heading>
          ),
          href: '/profiles/grier-dorman/',
        },
        {
          id: 'ecb372a7-3c52-4530-8fae-e3f5b53b9e2c',
          avatar: (
            <Image
              alt="Portrait of Rodolph Yarrington"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar0.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Rodolph Yarrington
            </Heading>
          ),
          href: '/profiles/rodolph-yarrington/',
        },
        {
          id: '89c0b261-21bd-4b51-81c9-9bd3848d59f2',
          avatar: (
            <Image
              alt="Portrait of Nicola Cobbledick"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar1.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Nicola Cobbledick
            </Heading>
          ),
          href: '/profiles/nicola-cobbledick/',
        },
        {
          id: 'c2271a4d-4b35-4524-8520-e39345ad6a5f',
          avatar: (
            <Image
              alt="Portrait of De Pick"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar2.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              De Pick
            </Heading>
          ),
          href: '/profiles/de-pick',
        },
        {
          id: '4555e083-1638-4a0d-ad7b-06a2ff48510a',
          avatar: (
            <Image
              alt="Portrait of Christian Dowsing"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar3.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Christian Dowsing
            </Heading>
          ),
          href: '/profiles/christian-dowsing/',
        },
        {
          id: 'ddb2bde3-05c1-4662-af56-b525be8eaa48',
          avatar: (
            <Image
              alt="Portrait of Aggy Ethridge"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar4.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Aggy Ethridge
            </Heading>
          ),
          href: '/profiles/aggy-ethridge/',
        },
        {
          id: '05ac4c16-46e2-4aec-ad7c-610cf09da2e8',
          avatar: (
            <Image
              alt="Portrait of Nada Genike"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar5.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Nada Genike
            </Heading>
          ),
          href: '/profiles/nada-genike/',
        },
        {
          id: '3fdf81b9-ae4a-482a-b7f8-63ab9945912b',
          avatar: (
            <Image
              alt="Portrait of Kimmie Sowte"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar6.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Kimmie Sowte
            </Heading>
          ),
          href: '/profiles/kimmie-sowte/',
        },
        {
          id: '4cccaace-cc90-4a16-81a5-ac9a6ace8267',
          avatar: (
            <Image
              alt="Portrait of Irena Lamplugh"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar7.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Irena Lamplugh
            </Heading>
          ),
          href: '/profiles/irena-lamplugh/',
        },
        {
          id: '47fa45eb-b65e-4aa0-9ebb-c0038ffdca7c',
          avatar: (
            <Image
              alt="Portrait of Dolph de Goey"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar8.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Dolph de Goey
            </Heading>
          ),
          href: '/profiles/dolph-de-goey/',
        },
        {
          id: '1e225699-f08e-48e5-884a-b5ffa0889182',
          avatar: (
            <Image
              alt="Portrait of Ertha Langfield"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar9.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Ertha Langfield
            </Heading>
          ),
          href: '/profiles/ertha-langfield/',
        },
        {
          id: '1ecffed6-5a23-483c-a692-3442965b08d6',
          avatar: (
            <Image
              alt="Portrait of Drucill Grishinov"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar2.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Drucill Grishinov
            </Heading>
          ),
          href: '/profiles/drucill-grishinov/',
        },
        {
          id: '09daa2cb-b6ab-452a-afc9-ddac954744b9',
          avatar: (
            <Image
              alt="Portrait of Nessie Galletley"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar3.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Nessie Galletley
            </Heading>
          ),
          href: '/profiles/nessie-galletley/',
        },
        {
          id: 'e8a54954-8bb6-46e1-8c57-036d1970620a',
          avatar: (
            <Image
              alt="Portrait of Marcellina Palmer"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar4.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Marcellina Palmer
            </Heading>
          ),
          href: '/profiles/marcellina-palmer/',
        },
        {
          id: '9e867245-8bfd-4c31-b8c0-619d49af5f44',
          avatar: (
            <Image
              alt="Portrait of Christabella Shann"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar5.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Christabella Shann
            </Heading>
          ),
          href: '/profiles/christabella-shann/',
        },
        {
          id: '22ac3f6a-0d58-45b0-8069-f0bfbc23d827',
          avatar: (
            <Image
              alt="Portrait of Tawsha Fruish"
              sx={{ borderRadius: '50%', height: 64, width: 64 }}
              src="/avatar6.png"
            />
          ),
          name: (
            <Heading as="div" sx={{ fontSize: 2, textAlign: 'start' }}>
              Tawsha Fruish
            </Heading>
          ),
          href: '/profiles/tawsha-fruish/',
        },
      ]}
      m={2}
    />
  </ThemeProvider>
);

export default ManyAvatars;
