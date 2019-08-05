import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from 'rebass';
import Badge from '../Badge';
import ProfilePreview from '../ProfilePreview';
import FlexList from './FlexList';

storiesOf('Components/FlexList', module)
  .add('avatars', () => (
    <FlexList
      render={({ id, ...profile }) => (
        <ProfilePreview profile={profile} key={id} m={2} />
      )}
      values={[
        {
          id: '7e3fbdf3-e724-4e7d-b007-da7a1db3925e',
          avatar() {
            return (
              <Image
                alt="Nance MacFadin"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar0.png"
              />
            );
          },
          href: '/profiles/nance-macfadin',
        },
        {
          id: 'de10c4e6-037f-414b-bf94-9a229393402b',
          avatar() {
            return (
              <Image
                alt="Clerc Edis"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar1.png"
              />
            );
          },
          href: '/profiles/clerc-edis',
        },
        {
          id: '51e2a815-db3d-43d8-b710-581970e37685',
          avatar() {
            return (
              <Image
                alt="Clifford Skipperbottom"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar2.png"
              />
            );
          },
          href: '/profiles/clifford-skipperbottom',
        },
        {
          id: '084b03f9-ec30-4089-b51a-5672aae49ece',
          avatar() {
            return (
              <Image
                alt="Willow Rangall"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar3.png"
              />
            );
          },
          href: '/profiles/willow-rangall',
        },
      ]}
    />
  ))
  .add('many avatars', () => (
    <FlexList
      render={({ id, ...profile }) => (
        <ProfilePreview profile={profile} key={id} m={2} />
      )}
      values={[
        {
          id: '28a18fec-eb4d-468f-b370-14435d810631',
          avatar() {
            return (
              <Image
                alt="Nance MacFadin"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar0.png"
              />
            );
          },
          href: '/profiles/nance-macfadin',
        },
        {
          id: 'fb826af2-557a-46cc-ad46-cdba00d06070',
          avatar() {
            return (
              <Image
                alt="Clerc Edis"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar1.png"
              />
            );
          },
          href: '/profiles/clerc-edis',
        },
        {
          id: 'e1a864e7-2ae0-440b-9dbf-bd49f64f3c1b',
          avatar() {
            return (
              <Image
                alt="Clifford Skipperbottom"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar2.png"
              />
            );
          },
          href: '/profiles/clifford-skipperbottom',
        },
        {
          id: 'ac0323a9-ac38-4afd-86db-ddc2f450530c',
          avatar() {
            return (
              <Image
                alt="Willow Rangall"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar3.png"
              />
            );
          },
          href: '/profiles/willow-rangall',
        },
        {
          id: '080d8ec4-0f4f-4d54-912e-50debb40328d',
          avatar() {
            return (
              <Image
                alt="Suzy Cahan"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar4.png"
              />
            );
          },
          href: '/profiles/suzy-cahan',
        },
        {
          id: 'ebfa6771-7737-44ca-8203-16a32638bd36',
          avatar() {
            return (
              <Image
                alt="Sandra Abramovici"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar5.png"
              />
            );
          },
          href: '/profiles/sandra-abramovici',
        },
        {
          id: '5037a33b-5f67-48fe-b813-1b0ee3812dca',
          avatar() {
            return (
              <Image
                alt="Jan McKea"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar6.png"
              />
            );
          },
          href: '/profiles/jan-mckea',
        },
        {
          id: 'fd2744aa-269c-4790-9165-b78594594967',
          avatar() {
            return (
              <Image
                alt="Ola Brunger"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar7.png"
              />
            );
          },
          href: '/profiles/ola-brunger',
        },
        {
          id: '4abe113d-225d-4524-af73-329391ac34ad',
          avatar() {
            return (
              <Image
                alt="Ivette Rowlinson"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar8.png"
              />
            );
          },
          href: '/profiles/ivette-rowlinson',
        },
        {
          id: 'aaf5e634-30a5-4d76-979a-d00a1fe48b52',
          avatar() {
            return (
              <Image
                alt="Madeleine Stredwick"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar9.png"
              />
            );
          },
          href: '/profiles/madeleine-stredwick',
        },
        {
          id: '83e8e72a-fbb1-4cc1-9759-f78a804393c2',
          avatar() {
            return (
              <Image
                alt="Lin Billson"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar0.png"
              />
            );
          },
          href: '/profiles/lin-billson',
        },
        {
          id: '2e25002b-aa42-4689-8424-ffea4cc64490',
          avatar() {
            return (
              <Image
                alt="Alfie Piborn"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar1.png"
              />
            );
          },
          href: '/profiles/alfie-piborn',
        },
        {
          id: '3b3f0d96-def7-4fd5-b821-5eaea96dafb1',
          avatar() {
            return (
              <Image
                alt="Garvy Bartlomiej"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar2.png"
              />
            );
          },
          href: '/profiles/garvy-bartlomiej',
        },
        {
          id: 'b7e23d6f-9617-4517-9ded-651e27c5e154',
          avatar() {
            return (
              <Image
                alt="Gustavus Splevings"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar3.png"
              />
            );
          },
          href: '/profiles/gustavus-splevings',
        },
        {
          id: '83f34164-c963-4d48-8f52-2071bfa4cefb',
          avatar() {
            return (
              <Image
                alt="Cristi Tale"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar4.png"
              />
            );
          },
          href: '/profiles/cristi-tale',
        },
        {
          id: 'fa083843-d783-4e1b-82cb-3373c02e445d',
          avatar() {
            return (
              <Image
                alt="Gae Phinn"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar5.png"
              />
            );
          },
          href: '/profiles/gae-phinn',
        },
        {
          id: '62e58fe0-c981-4a0c-bc00-ff9594195254',
          avatar() {
            return (
              <Image
                alt="Leoline Hacaud"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar6.png"
              />
            );
          },
          href: '/profiles/leoline-hacaud',
        },
        {
          id: 'ded84491-05bc-454f-a702-79c081702a07',
          avatar() {
            return (
              <Image
                alt="Rufe Rockhill"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar7.png"
              />
            );
          },
          href: '/profiles/rufe-rockhill',
        },
        {
          id: '24049a27-537d-4751-ad3d-27d276755a3c',
          avatar() {
            return (
              <Image
                alt="Bernadene van der Velden"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar8.png"
              />
            );
          },
          href: '/profiles/bernadene-van-der-velden',
        },
        {
          id: 'c60da4d6-cbc9-4121-9fe3-1c8be9498c23',
          avatar() {
            return (
              <Image
                alt="Edithe Densell"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar9.png"
              />
            );
          },
          href: '/profiles/edithe-densell',
        },
        {
          id: '2f4f2bc6-f4bf-4f49-a05a-0e89b248aef5',
          avatar() {
            return (
              <Image
                alt="Emmalynne Sone"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar0.png"
              />
            );
          },
          href: '/profiles/emmalynne-sone',
        },
        {
          id: '73384c21-2c66-466f-a472-f61184476df2',
          avatar() {
            return (
              <Image
                alt="Ardella Sapir"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar1.png"
              />
            );
          },
          href: '/profiles/ardella-sapir',
        },
        {
          id: '320fc82c-b6f9-4153-9570-00ead021b595',
          avatar() {
            return (
              <Image
                alt="Ilise Sailor"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar2.png"
              />
            );
          },
          href: '/profiles/ilise-sailor',
        },
        {
          id: '6079826c-636a-4d04-95c2-e1d5a71bdd99',
          avatar() {
            return (
              <Image
                alt="Anita Olander"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar3.png"
              />
            );
          },
          href: '/profiles/anita-olander',
        },
        {
          id: '7ea27273-6136-4768-8f9a-b5a954918e03',
          avatar() {
            return (
              <Image
                alt="Gerik Frisby"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar4.png"
              />
            );
          },
          href: '/profiles/gerik-frisby',
        },
        {
          id: '4992e294-8d97-4a19-8e38-3acffb7ca787',
          avatar() {
            return (
              <Image
                alt="Rayshell Marmion"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar5.png"
              />
            );
          },
          href: '/profiles/rayshell-marmion',
        },
        {
          id: 'fd743b4d-d518-4f56-9f0a-6ffa48551cee',
          avatar() {
            return (
              <Image
                alt="Brooks Grene"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar6.png"
              />
            );
          },
          href: '/profiles/brooks-grene',
        },
        {
          id: '31f794f6-9eae-491c-806a-e5363f5009dc',
          avatar() {
            return (
              <Image
                alt="Bev Dorey"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar7.png"
              />
            );
          },
          href: '/profiles/bev-dorey',
        },
        {
          id: '4aea155f-3138-47be-9556-d82ad9ff818c',
          avatar() {
            return (
              <Image
                alt="Vladimir Parres"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar8.png"
              />
            );
          },
          href: '/profiles/vladimir-parres',
        },
        {
          id: 'ecc87491-0f66-46f2-8d4c-addeb810d5fe',
          avatar() {
            return (
              <Image
                alt="Really really really really really really really really really really long name"
                borderRadius="circle"
                height={64}
                width={64}
                src="/avatar9.png"
              />
            );
          },
          href: '/profiles/really-really-long-name',
        },
      ]}
    />
  ))
  .add('badges', () => (
    <FlexList
      render={badge => (
        <Badge
          link={badge.link}
          mode={badge.mode}
          key={badge.link.text}
          m={1}
        />
      )}
      values={[
        {
          link: { text: 'Design Engineer', href: '/design-engineer' },
          mode: 'red',
        },
        { link: { text: 'Recruiter', href: '/recruiter' }, mode: 'green' },
        { link: { text: 'Teacher', href: '/teacher' }, mode: 'yellow' },
        {
          link: {
            text: 'Environmental Specialist',
            href: '/environmental-specialist',
          },
        },
      ]}
    />
  ))
  .add('many badges', () => (
    <FlexList
      render={badge => (
        <Badge
          link={badge.link}
          mode={badge.mode}
          key={badge.link.text}
          m={1}
        />
      )}
      values={[
        {
          link: {
            text: 'Design Engineer',
            href: '/design-engineer',
          },
        },
        { link: { text: 'Recruiter', href: '/recruiter' }, mode: 'secondary' },
        { link: { text: 'Teacher', href: '/teacher' }, mode: 'blue' },
        {
          link: {
            text: 'Environmental Specialist',
            href: '/environmental-specialist',
          },
          mode: 'green',
        },
        {
          link: {
            text: 'Nuclear Power Engineer',
            href: '/nuclear-power-engineer',
          },
          mode: 'red',
        },
        {
          link: { text: 'Cost Accountant', href: '/cost-accountant' },
          mode: 'yellow',
        },
        { link: { text: 'VP Marketing', href: '/vp-marketing' } },
        {
          link: {
            text: 'Automation Specialist',
            href: '/automation-specialist',
          },
          mode: 'secondary',
        },
        {
          link: {
            text: 'Analog Circuit Design Manager',
            href: '/analog-circuit-design-manager',
          },
          mode: 'blue',
        },
        {
          link: {
            text: 'Senior Cost Accountant',
            href: '/senior-cost-accountant',
          },
          mode: 'green',
        },
        {
          link: {
            text: 'Desktop Support Technician',
            href: '/desktop-tupport-technician',
          },
          mode: 'red',
        },
        {
          link: { text: 'Web Developer', href: '/web-developer' },
          mode: 'yellow',
        },
        { link: { text: 'Technical Writer', href: '/technical-writer' } },
        {
          link: {
            text: 'Database Administrator',
            href: 'database-administrator',
          },
          mode: 'secondary',
        },
        {
          link: {
            text: 'Systems Administrator',
            href: '/systems-administrator',
          },
          mode: 'blue',
        },
        {
          link: { text: 'Assistant Manager', href: '/assistant-manager' },
          mode: 'green',
        },
      ]}
    />
  ));
