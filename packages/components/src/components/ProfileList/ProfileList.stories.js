import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from 'rebass';
import ProfileList from './ProfileList';

storiesOf('Components/ProfileList', module)
  .add('1 profile', () => {
    const profiles = [
      {
        id: '1b0abeea-9c71-446c-9cda-a2ce977b0e78',
        avatar() {
          return (
            <Image
              alt="Nance MacFadin"
              borderRadius="circle"
              height={128}
              width={128}
              src="/avatar0.png"
            />
          );
        },
        name: 'Nance MacFadin',
        jobtitle: 'Help Desk Operator',
        organization: 'Schuster-Senger',
      },
    ];
    return <ProfileList profiles={profiles} m={2} />;
  })
  .add('2 profiles', () => {
    const profiles = [
      {
        id: '40c9a80a-deba-4d46-8143-585d45239426',
        avatar() {
          return (
            <Image
              alt="Nance MacFadin"
              borderRadius="circle"
              height={128}
              width={128}
              src="/avatar0.png"
            />
          );
        },
        name: 'Nance MacFadin',
        jobtitle: 'Help Desk Operator',
        organization: 'Schuster-Senger',
      },
      {
        id: 'e9d9c770-debe-4f1b-915a-e91a7a630534',
        avatar() {
          return (
            <Image
              alt="Cleric Edis"
              borderRadius="circle"
              height={128}
              width={128}
              src="/avatar1.png"
            />
          );
        },
        name: 'Cleric Edis',
        jobtitle: 'Staff Scientist',
        organization: 'Ritchie Inc',
      },
    ];
    return <ProfileList profiles={profiles} m={2} />;
  })
  .add('3 profiles', () => (
    <ProfileList
      profiles={[
        {
          id: '981e7e1d-1825-4e23-9f43-77b3645fd0b3',
          avatar() {
            return (
              <Image
                alt="Nance MacFadin"
                borderRadius="circle"
                height={128}
                width={128}
                src="/avatar0.png"
              />
            );
          },
          name: 'Nance MacFadin',
          jobtitle: 'Help Desk Operator',
          organization: 'Schuster-Senger',
        },
        {
          id: '6317e7ec-480a-486a-b65f-37a8253664d6',
          avatar() {
            return (
              <Image
                alt="Cleric Edis"
                borderRadius="circle"
                height={128}
                width={128}
                src="/avatar1.png"
              />
            );
          },
          name: 'Cleric Edis',
          jobtitle: 'Staff Scientist',
          organization: 'Ritchie Inc',
        },
        {
          id: '65da9cba-793f-4b85-ad57-a58a52f8ff71',
          avatar() {
            return (
              <Image
                alt="Clifford Skipperbottom"
                borderRadius="circle"
                height={128}
                width={128}
                src="/avatar2.png"
              />
            );
          },
          name: 'Clifford Skipperbottom',
          jobtitle: 'Senior Financial Analyst',
          organization: 'Block, Bruen and Gerlach',
        },
      ]}
      m={2}
    />
  ))
  .add('many profiles', () => (
    <ProfileList
      profiles={[
        {
          id: 'a6b4babd-6b11-4b81-8ac0-73cefb040cb7',
          avatar() {
            return (
              <Image
                alt="Nance MacFadin"
                borderRadius="circle"
                height={128}
                width={128}
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
                borderRadius="circle"
                height={128}
                width={128}
                src="/avatar1.png"
              />
            );
          },
          name: 'Cleric Edis',
          affiliation: {
            jobtitle: 'Staff Scientist',
            organization: 'Ritchie Inc',
          },
          href: '/profiles/cleric-edis/',
        },
        {
          id: 'da80ba06-3a45-4236-8ff5-aac4e8bf2d8a',
          avatar() {
            return (
              <Image
                alt="Clifford Skipperbottom"
                borderRadius="circle"
                height={128}
                width={128}
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
                borderRadius="circle"
                height={128}
                width={128}
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
                borderRadius="circle"
                height={128}
                width={128}
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
                borderRadius="circle"
                height={128}
                width={128}
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
                borderRadius="circle"
                height={128}
                width={128}
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
                borderRadius="circle"
                height={128}
                width={128}
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
                borderRadius="circle"
                height={128}
                width={128}
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
                borderRadius="circle"
                height={128}
                width={128}
                src="/avatar9.png"
              />
            );
          },
          name: 'Madeleine Stredwick',
          href: '/profiles/madeleine-stredwick/',
        },
      ]}
      m={2}
    />
  ));
