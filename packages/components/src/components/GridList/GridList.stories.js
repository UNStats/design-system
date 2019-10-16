import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Image } from 'rebass';
import ProfilePreview from '../ProfilePreview';
import GridList from './GridList';

storiesOf('Components/GridList', module)
  .addDecorator(withKnobs)
  .add('avatars', () => (
    <GridList
      align={select('align', ['left', 'center', 'right'], 'center')}
      gridGap={2}
      gridTemplateColumns="repeat(auto-fit, minmax(64px, 1fr))"
      render={({ id, ...profile }) => (
        <ProfilePreview profile={profile} key={id} />
      )}
      values={[
        {
          id: '44494dbe-5262-4d8c-bc90-34c5e820e3aa',
          avatar() {
            return (
              <Image
                alt="Berenice Feldmus"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar0.png"
              />
            );
          },
          href: '/profiles/berenice-feldmus/',
        },
        {
          id: '8a9036f7-7d44-4080-a44a-ec6626654764',
          avatar() {
            return (
              <Image
                alt="Sidonnie Halbeard"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar1.png"
              />
            );
          },
          href: '/profiles/sidonnie-halbeard/',
        },
        {
          id: 'b1bf65d0-887e-492c-986f-a23c10843b1b',
          avatar() {
            return (
              <Image
                alt="Jacenta Busch"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar2.png"
              />
            );
          },
          href: '/profiles/jacenta-busch/',
        },
        {
          id: '365ad4ac-3a6e-448a-88b2-af1c6b99c0ca',
          avatar() {
            return (
              <Image
                alt="Mercie Kuban"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar3.png"
              />
            );
          },
          href: '/profiles/mercie-kuban/',
        },
        {
          id: '05f4fbf0-5724-4fb5-8d37-265046d2a463',
          avatar() {
            return (
              <Image
                alt="Candis Ruggs"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar4.png"
              />
            );
          },
          href: '/profiles/candis-ruggs/',
        },
        {
          id: '50efe1ed-5639-4b43-a118-b9caf1a9e719',
          avatar() {
            return (
              <Image
                alt="Pippa Rawkesby"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar5.png"
              />
            );
          },
          href: '/profiles/pippa-rawkesby/',
        },
        {
          id: 'b6846de6-6ccb-4d12-a994-67dc7b7606f3',
          avatar() {
            return (
              <Image
                alt="Issie Kisby"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar6.png"
              />
            );
          },
          href: '/profiles/issie-kisby/',
        },
        {
          id: '98487ed0-f1e5-4da6-9d81-2a5ed257d5d7',
          avatar() {
            return (
              <Image
                alt="Josee Lyven"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar7.png"
              />
            );
          },
          href: '/profiles/josee-lyven/',
        },
        {
          id: '11c7c6e5-2af1-4005-8a14-d9b7cdf9b6d0xx',
          avatar() {
            return (
              <Image
                alt="Barton Pentecost"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar8.png"
              />
            );
          },
          href: '/profiles/barton-pentecost/',
        },
        {
          id: '574afbf7-4e72-4f61-bfe2-320efd4a06eb',
          avatar() {
            return (
              <Image
                alt="Grier Dorman"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar9.png"
              />
            );
          },
          href: '/profiles/grier-dorman/',
        },
        {
          id: 'ecb372a7-3c52-4530-8fae-e3f5b53b9e2c',
          avatar() {
            return (
              <Image
                alt="Rodolph Yarrington"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar0.png"
              />
            );
          },
          href: '/profiles/rodolph-yarrington/',
        },
        {
          id: '89c0b261-21bd-4b51-81c9-9bd3848d59f2',
          avatar() {
            return (
              <Image
                alt="Nicola Cobbledick"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar1.png"
              />
            );
          },
          href: '/profiles/nicola-cobbledick/',
        },
        {
          id: 'c2271a4d-4b35-4524-8520-e39345ad6a5f',
          avatar() {
            return (
              <Image
                alt="De Pick"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar2.png"
              />
            );
          },
          slug: '/profiles/de-pick',
        },
        {
          id: '4555e083-1638-4a0d-ad7b-06a2ff48510a',
          avatar() {
            return (
              <Image
                alt="Christian Dowsing"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar3.png"
              />
            );
          },
          href: '/profiles/christian-dowsing/',
        },
        {
          id: 'ddb2bde3-05c1-4662-af56-b525be8eaa48',
          avatar() {
            return (
              <Image
                alt="Aggy Ethridge"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar4.png"
              />
            );
          },
          href: '/profiles/aggy-ethridge/',
        },
        {
          id: '05ac4c16-46e2-4aec-ad7c-610cf09da2e8',
          avatar() {
            return (
              <Image
                alt="Nada Genike"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar5.png"
              />
            );
          },
          href: '/profiles/nada-genike/',
        },
        {
          id: '3fdf81b9-ae4a-482a-b7f8-63ab9945912b',
          avatar() {
            return (
              <Image
                alt="Kimmie Sowte"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar6.png"
              />
            );
          },
          href: '/profiles/kimmie-sowte/',
        },
        {
          id: '4cccaace-cc90-4a16-81a5-ac9a6ace8267',
          avatar() {
            return (
              <Image
                alt="Irena Lamplugh"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar7.png"
              />
            );
          },
          href: '/profiles/irena-lamplugh/',
        },
        {
          id: '47fa45eb-b65e-4aa0-9ebb-c0038ffdca7c',
          avatar() {
            return (
              <Image
                alt="Dolph de Goey"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar8.png"
              />
            );
          },
          href: '/profiles/dolph-de-goey/',
        },
        {
          id: '1e225699-f08e-48e5-884a-b5ffa0889182',
          avatar() {
            return (
              <Image
                alt="Ertha Langfield"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar9.png"
              />
            );
          },
          href: '/profiles/ertha-langfield/',
        },
        {
          id: 'c790461d-ca84-4ec1-95a0-b8b655f3a530',
          avatar() {
            return (
              <Image
                alt="Consuelo Chasteau"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar0.png"
              />
            );
          },
          href: '/profiles/consuelo-chasteau/',
        },
        {
          id: 'e319d9d7-87e5-45a8-93db-ee8d33f72f6b',
          avatar() {
            return (
              <Image
                alt="Averil Ongin"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar1.png"
              />
            );
          },
          href: '/profiles/averil-ongin/',
        },
        {
          id: '1ecffed6-5a23-483c-a692-3442965b08d6',
          avatar() {
            return (
              <Image
                alt="Drucill Grishinov"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar2.png"
              />
            );
          },
          href: '/profiles/drucill-grishinov/',
        },
        {
          id: '09daa2cb-b6ab-452a-afc9-ddac954744b9',
          avatar() {
            return (
              <Image
                alt="Nessie Galletley"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar3.png"
              />
            );
          },
          href: '/profiles/nessie-galletley/',
        },
        {
          id: 'e8a54954-8bb6-46e1-8c57-036d1970620a',
          avatar() {
            return (
              <Image
                alt="Marcellina Palmer"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar4.png"
              />
            );
          },
          href: '/profiles/marcellina-palmer/',
        },
        {
          id: '9e867245-8bfd-4c31-b8c0-619d49af5f44',
          avatar() {
            return (
              <Image
                alt="Christabella Shann"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar5.png"
              />
            );
          },
          href: '/profiles/christabella-shann/',
        },
        {
          id: '22ac3f6a-0d58-45b0-8069-f0bfbc23d827',
          avatar() {
            return (
              <Image
                alt="Tawsha Fruish"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar6.png"
              />
            );
          },
          href: '/profiles/tawsha-fruish/',
        },
        {
          id: 'd9e9fc81-cbe7-47ce-b11f-ae226b0fa5e6',
          avatar() {
            return (
              <Image
                alt="Odessa Munns"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar7.png"
              />
            );
          },
          href: '/profiles/odessa-munns/',
        },
        {
          id: '8d147fc3-8b4c-4e6f-8a63-b10cc59fb203',
          avatar() {
            return (
              <Image
                alt="Conni McNickle"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar8.png"
              />
            );
          },
          href: '/profiles/conni-mcnickle/',
        },
        {
          id: '01a4ede7-3183-4d11-8b7f-0831fcd81a44',
          avatar() {
            return (
              <Image
                alt="Cleric Edis"
                sx={{ borderRadius: 'circle', height: 64, width: 64 }}
                src="/avatar9.png"
              />
            );
          },
          href: '/profiles/cleric-edis/',
        },
      ]}
      m={2}
    />
  ))
  .add('profiles', () => (
    <GridList
      align={select('align', ['left', 'center', 'right'], 'center')}
      gridGap={3}
      gridTemplateColumns="repeat(auto-fit, 256px)"
      render={({ id, ...profile }) => (
        <ProfilePreview profile={profile} key={id} />
      )}
      values={[
        {
          id: 'a6b4babd-6b11-4b81-8ac0-73cefb040cb7',
          avatar() {
            return (
              <Image
                alt="Nance MacFadin"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar0.png"
              />
            );
          },
          name: 'Nance MacFadin',
          href: '/profiles/nance-macfadin/',
        },
        {
          id: 'a8775e61-4238-4083-8eb2-66bccf27b111',
          avatar() {
            return (
              <Image
                alt="Cleric Edis"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar1.png"
              />
            );
          },
          name: 'Cleric Edis',
          href: '/profiles/cleric-edis/',
        },
        {
          id: 'da80ba06-3a45-4236-8ff5-aac4e8bf2d8a',
          avatar() {
            return (
              <Image
                alt="Clifford Skipperbottom"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar2.png"
              />
            );
          },
          honorific: 'His Excellency',
          name: 'Clifford Skipperbottom',
          href: '/profiles/clifford-skipperbottom/',
        },
        {
          id: '5654392c-d5e7-423f-bb77-06d8070a0028',
          avatar() {
            return (
              <Image
                alt="Willow Rangall"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar3.png"
              />
            );
          },
          name: 'Willow Rangall',
          href: '/profiles/willow-rangall/',
        },
        {
          id: 'cea2aaa3-7f0f-48be-bf18-f61f3e1be01a',
          avatar() {
            return (
              <Image
                alt="Suzy Cahan"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar4.png"
              />
            );
          },
          honorific: 'Her Royal Highness',
          name: 'Suzy Cahan',
          href: '/profiles/suzy-cahan/',
        },
        {
          id: 'b57056c5-f697-4c33-b0fe-790d8c2576b2',
          avatar() {
            return (
              <Image
                alt="Sandra Abramovici"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar5.png"
              />
            );
          },
          name: 'Sandra Abramovici',
          href: '/profiles/sandra-abramovici/',
        },
        {
          id: '9dc6a800-57fe-4c1b-b9bb-ad087ea214e1',
          avatar() {
            return (
              <Image
                alt="Jan McKea"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar6.png"
              />
            );
          },
          honorific: 'His Holiness',
          name: 'Jan McKea',
          href: '/profiles/jan-mckea/',
        },
        {
          id: '636d2929-6caf-4c6c-9267-ba15822a170f',
          avatar() {
            return (
              <Image
                alt="Ola Brunger"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar7.png"
              />
            );
          },
          name: 'Ola Brunger',
          href: '/profiles/ola-brunger/',
        },
        {
          id: 'a7d9cc5b-7762-47de-b746-e68ce5b5151b',
          avatar() {
            return (
              <Image
                alt="Ivette Rowlinson"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar8.png"
              />
            );
          },
          name: 'Ivette Rowlinson',
          href: '/profiles/ivette-rowlinson/',
        },
        {
          id: '2e22fbc2-db89-42cd-986c-0d4809635449',
          avatar() {
            return (
              <Image
                alt="Madeleine Stredwick"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar9.png"
              />
            );
          },
          name: 'Madeleine Stredwick',
          href: '/profiles/madeleine-stredwick/',
        },
        {
          id: '14e56706-c567-472f-9078-5142adeea906',
          avatar() {
            return (
              <Image
                alt="Lin Billson"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar0.png"
              />
            );
          },
          name: 'Lin Billson',
          href: '/profiles/lin-billson/',
        },
        {
          id: 'a4138865-be2e-41e3-9974-dfcbfaae2f6c',
          avatar() {
            return (
              <Image
                alt="Alfie Piborn"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar1.png"
              />
            );
          },
          name: 'Alfie Piborn',
          href: '/profiles/alfie-piborn/',
        },
        {
          id: 'ac1c8eaa-afb2-4fb9-8f6b-bc6276248790',
          avatar() {
            return (
              <Image
                alt="Garvy Bartlomiej"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar2.png"
              />
            );
          },
          name: 'Garvy Bartlomiej',
          href: '/profiles/garvy-bartlomiej/',
        },
        {
          id: '520da4f5-7165-4be2-8b6d-1d74173dacff',
          avatar() {
            return (
              <Image
                alt="Gustavus Splevings"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar3.png"
              />
            );
          },
          name: 'Gustavus Splevings',
          href: '/profiles/gustavus-splevings/',
        },
        {
          id: '0b28e099-819a-433e-a015-72a63adafd81',
          avatar() {
            return (
              <Image
                alt="Cristi Tale"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar4.png"
              />
            );
          },
          name: 'Cristi Tale',
          href: '/profiles/cristi-tale/',
        },
        {
          id: '541e3d17-279d-4acc-81a7-68f542f1814d',
          avatar() {
            return (
              <Image
                alt="Gae Phinn"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar5.png"
              />
            );
          },
          name: 'Gae Phinn',
          href: '/profiles/gae-phinn/',
        },
        {
          id: '6c7d0920-33df-49c0-bc39-085b9e80bbf4',
          avatar() {
            return (
              <Image
                alt="Gae Phinn"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar6.png"
              />
            );
          },
          name: 'Leoline Hacaud',
          href: '/profiles/leoline-hacaud/',
        },
        {
          id: '35fdc85e-d1e0-4ba2-a3aa-24eda7064a76',
          avatar() {
            return (
              <Image
                alt="Rufe Rockhill"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar7.png"
              />
            );
          },
          name: 'Rufe Rockhill',
          href: '/profiles/rufe-rockhill/',
        },
        {
          id: '80ce8ec0-96c6-4f6c-86b0-e14932385e34',
          avatar() {
            return (
              <Image
                alt="Bernadene van der Velden"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar8.png"
              />
            );
          },
          name: 'Bernadene van der Velden',
          href: '/profiles/bernadene-van-der-velden/',
        },
        {
          id: 'c085d0ed-0992-4e0b-92c4-81a76a0c6995',
          avatar() {
            return (
              <Image
                alt="Edithe Densell"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar9.png"
              />
            );
          },
          name: 'Edithe Densell',
          href: '/profiles/edithe-densell/',
        },
        {
          id: 'f4a0d64a-c31b-4a6e-a522-6ac84511ab27',
          avatar() {
            return (
              <Image
                alt="Emmalynne Sone"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar0.png"
              />
            );
          },
          name: 'Emmalynne Sone',
          href: '/profiles/emmalynne-sone/',
        },
        {
          id: '6006aaa1-d8a0-480a-a30f-d9d3a4230dcf',
          avatar() {
            return (
              <Image
                alt="Ardella Sapir"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar1.png"
              />
            );
          },
          name: 'Ardella Sapir',
          href: '/profiles/ardella-sapir/',
        },
        {
          id: '6960355a-8070-44c5-b4d8-788db6366194',
          avatar() {
            return (
              <Image
                alt="Ilise Sailor"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar2.png"
              />
            );
          },
          name: 'Ilise Sailor',
          href: '/profiles/ilise-sailor/',
        },
        {
          id: '03b3a3b4-e54a-412c-919f-1c9d38a886fe',
          avatar() {
            return (
              <Image
                alt="Anita Olander"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar3.png"
              />
            );
          },
          name: 'Anita Olander',
          href: '/profiles/anita-olander/',
        },
        {
          id: '99bb24bc-c161-4c32-ab27-4cdec75ae665',
          avatar() {
            return (
              <Image
                alt="Gerik Frisby"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar4.png"
              />
            );
          },
          name: 'Gerik Frisby',
          href: '/profiles/gerik-frisby/',
        },
        {
          id: 'cfc32174-6b52-4c31-a706-348caf9488c8',
          avatar() {
            return (
              <Image
                alt="Rayshell Marmion"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar5.png"
              />
            );
          },
          name: 'Rayshell Marmion',
          href: '/profiles/rayshell-marmion/',
        },
        {
          id: '760cbce9-c2a0-40d2-9094-44cf8f1073e3',
          avatar() {
            return (
              <Image
                alt="Brooks Grene"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar6.png"
              />
            );
          },
          name: 'Brooks Grene',
          href: '/profiles/brooks-grene/',
        },
        {
          id: 'b68c850e-a78b-4955-8bc0-7f19ea90d704',
          avatar() {
            return (
              <Image
                alt="Bev Dorey"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar7.png"
              />
            );
          },
          name: 'Bev Dorey',
          href: '/profiles/bev-dorey/',
        },
        {
          id: '8b7c529f-c10b-49c3-b9a1-203b2f954e83',
          avatar() {
            return (
              <Image
                alt="Vladimir Parres"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar8.png"
              />
            );
          },
          name: 'Vladimir Parres',
          href: '/profiles/vladimir-parres/',
        },
        {
          id: 'fb8ac1ee-42a8-4a9b-b66a-d24340554b32',
          avatar() {
            return (
              <Image
                alt="Really really really really really really really really really really long name"
                sx={{ borderRadius: 'circle', height: 128, width: 128 }}
                src="/avatar9.png"
              />
            );
          },
          name:
            'Really really really really really really really really really really long name',
          href:
            '/profiles/really-really-really-really-really-really-really-really-really-really-long-name/',
        },
      ]}
      m={2}
    />
  ));
