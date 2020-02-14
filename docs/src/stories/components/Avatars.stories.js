import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Image } from 'theme-ui';
import { Avatars } from '@undataforum/components';

const alignments = ['start', 'center', 'end'];

storiesOf('Components/Avatars', module)
  .addDecorator(withKnobs)
  .add('a few avatars', () => (
    <Avatars
      values={[
        {
          id: '44494dbe-5262-4d8c-bc90-34c5e820e3aa',
          avatar: (
            <Image
              alt="Portrait of Berenice Feldmus"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar0.png"
            />
          ),
          name: 'Berenice Feldmus',
          href: '/profiles/berenice-feldmus/',
        },
        {
          id: '8a9036f7-7d44-4080-a44a-ec6626654764',
          avatar: (
            <Image
              alt="Portrait of Sidonnie Halbeard"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar1.png"
            />
          ),
          name: 'Sidonnie Halbeard',
          href: '/profiles/sidonnie-halbeard/',
        },
        {
          id: 'b1bf65d0-887e-492c-986f-a23c10843b1b',
          avatar: (
            <Image
              alt="Portrait of Jacenta Busch"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar2.png"
            />
          ),
          name: 'Jacenta Busch',
          href: '/profiles/jacenta-busch/',
        },
        {
          id: '365ad4ac-3a6e-448a-88b2-af1c6b99c0ca',
          avatar: (
            <Image
              alt="Portrait of Mercie Kuban"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar3.png"
            />
          ),
          name: 'Mercie Kuban',
          href: '/profiles/mercie-kuban/',
        },
        {
          id: '05f4fbf0-5724-4fb5-8d37-265046d2a463',
          avatar: (
            <Image
              alt="Portrait of Candis Ruggs"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar4.png"
            />
          ),
          name: 'Candis Ruggs',
          href: '/profiles/candis-ruggs/',
        },
      ]}
      align={select('align', alignments, 'start')}
      m={2}
    />
  ))
  .add('many avatars', () => (
    <Avatars
      values={[
        {
          id: '50efe1ed-5639-4b43-a118-b9caf1a9e719',
          avatar: (
            <Image
              alt="Portrait of Pippa Rawkesby"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar5.png"
            />
          ),
          name: 'Pippa Rawkesby',
          href: '/profiles/pippa-rawkesby/',
        },
        {
          id: 'b6846de6-6ccb-4d12-a994-67dc7b7606f3',
          avatar: (
            <Image
              alt="Portrait of Issie Kisby"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar6.png"
            />
          ),
          name: 'Issie Kisby',
          href: '/profiles/issie-kisby/',
        },
        {
          id: '98487ed0-f1e5-4da6-9d81-2a5ed257d5d7',
          avatar: (
            <Image
              alt="Portrait of Josee Lyven"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar7.png"
            />
          ),
          name: 'Josee Lyven',
          href: '/profiles/josee-lyven/',
        },
        {
          id: '11c7c6e5-2af1-4005-8a14-d9b7cdf9b6d0xx',
          avatar: (
            <Image
              alt="Portrait of Barton Pentecost"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar8.png"
            />
          ),
          name: 'Barton Pentecost',
          href: '/profiles/barton-pentecost/',
        },
        {
          id: '574afbf7-4e72-4f61-bfe2-320efd4a06eb',
          avatar: (
            <Image
              alt="Portrait of Grier Dorman"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar9.png"
            />
          ),
          name: 'Grier Dorman',
          href: '/profiles/grier-dorman/',
        },
        {
          id: 'ecb372a7-3c52-4530-8fae-e3f5b53b9e2c',
          avatar: (
            <Image
              alt="Portrait of Rodolph Yarrington"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar0.png"
            />
          ),
          name: 'Rodolph Yarrington',
          href: '/profiles/rodolph-yarrington/',
        },
        {
          id: '89c0b261-21bd-4b51-81c9-9bd3848d59f2',
          avatar: (
            <Image
              alt="Portrait of Nicola Cobbledick"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar1.png"
            />
          ),
          name: 'Nicola Cobbledick',
          href: '/profiles/nicola-cobbledick/',
        },
        {
          id: 'c2271a4d-4b35-4524-8520-e39345ad6a5f',
          avatar: (
            <Image
              alt="Portrait of De Pick"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar2.png"
            />
          ),
          name: 'De Pick',
          slug: '/profiles/de-pick',
        },
        {
          id: '4555e083-1638-4a0d-ad7b-06a2ff48510a',
          avatar: (
            <Image
              alt="Portrait of Christian Dowsing"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar3.png"
            />
          ),
          name: 'Christian Dowsing',
          href: '/profiles/christian-dowsing/',
        },
        {
          id: 'ddb2bde3-05c1-4662-af56-b525be8eaa48',
          avatar: (
            <Image
              alt="Portrait of Aggy Ethridge"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar4.png"
            />
          ),
          name: 'Aggy Ethridge',
          href: '/profiles/aggy-ethridge/',
        },
        {
          id: '05ac4c16-46e2-4aec-ad7c-610cf09da2e8',
          avatar: (
            <Image
              alt="Portrait of Nada Genike"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar5.png"
            />
          ),
          name: 'Nada Genike',
          href: '/profiles/nada-genike/',
        },
        {
          id: '3fdf81b9-ae4a-482a-b7f8-63ab9945912b',
          avatar: (
            <Image
              alt="Portrait of Kimmie Sowte"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar6.png"
            />
          ),
          name: 'Kimmie Sowte',
          href: '/profiles/kimmie-sowte/',
        },
        {
          id: '4cccaace-cc90-4a16-81a5-ac9a6ace8267',
          avatar: (
            <Image
              alt="Portrait of Irena Lamplugh"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar7.png"
            />
          ),
          name: 'Irena Lamplugh',
          href: '/profiles/irena-lamplugh/',
        },
        {
          id: '47fa45eb-b65e-4aa0-9ebb-c0038ffdca7c',
          avatar: (
            <Image
              alt="Portrait of Dolph de Goey"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar8.png"
            />
          ),
          name: 'Dolph de Goey',
          href: '/profiles/dolph-de-goey/',
        },
        {
          id: '1e225699-f08e-48e5-884a-b5ffa0889182',
          avatar: (
            <Image
              alt="Portrait of Ertha Langfield"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar9.png"
            />
          ),
          name: 'Ertha Langfield',
          href: '/profiles/ertha-langfield/',
        },
        {
          id: '1ecffed6-5a23-483c-a692-3442965b08d6',
          avatar: (
            <Image
              alt="Portrait of Drucill Grishinov"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar2.png"
            />
          ),
          name: 'Drucill Grishinov',
          href: '/profiles/drucill-grishinov/',
        },
        {
          id: '09daa2cb-b6ab-452a-afc9-ddac954744b9',
          avatar: (
            <Image
              alt="Portrait of Nessie Galletley"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar3.png"
            />
          ),
          name: 'Nessie Galletley',
          href: '/profiles/nessie-galletley/',
        },
        {
          id: 'e8a54954-8bb6-46e1-8c57-036d1970620a',
          avatar: (
            <Image
              alt="Portrait of Marcellina Palmer"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar4.png"
            />
          ),
          name: 'Marcellina Palmer',
          href: '/profiles/marcellina-palmer/',
        },
        {
          id: '9e867245-8bfd-4c31-b8c0-619d49af5f44',
          avatar: (
            <Image
              alt="Portrait of Christabella Shann"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar5.png"
            />
          ),
          name: 'Christabella Shann',
          href: '/profiles/christabella-shann/',
        },
        {
          id: '22ac3f6a-0d58-45b0-8069-f0bfbc23d827',
          avatar: (
            <Image
              alt="Portrait of Tawsha Fruish"
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar6.png"
            />
          ),
          name: 'Tawsha Fruish',
          href: '/profiles/tawsha-fruish/',
        },
      ]}
      align={select('align', alignments, 'start')}
      m={2}
    />
  ));
