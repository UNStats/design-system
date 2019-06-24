import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from 'rebass';
import ProfilePreview from './ProfilePreview';

storiesOf('Components/ProfilePreview', module)
  .add('complete profile', () => (
    <ProfilePreview
      profile={{
        avatar: function avatar() {
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
        affiliation: {
          jobtitle: 'Help Desk Operator',
          organization: 'Schuster-Senger',
        },
        badges: [
          {
            link: { text: 'Committee Member', href: '/committee' },
            mode: 'red',
          },
          {
            link: {
              text: 'Keynote Speaker',
              href: '/keynote-speakers',
            },
            mode: 'yellow',
          },
        ],
      }}
      m={2}
    />
  ))
  .add('align left', () => (
    <ProfilePreview
      profile={{
        avatar: function avatar() {
          return (
            <Image
              alt="Clerc Edis"
              borderRadius="circle"
              height={128}
              width={128}
              src="/avatar1.png"
            />
          );
        },
        name: 'Clerc Edis',
        affiliation: {
          jobtitle: 'Staff Scientist',
          organization: 'Ritchie Inc',
        },
        badges: [
          {
            link: { text: 'Committee Member', href: '/committee' },
            mode: 'red',
          },
          {
            link: {
              text: 'Keynote Speaker',
              href: '/keynotes',
            },
            mode: 'yellow',
          },
        ],
      }}
      align="left"
      m={2}
    />
  ))
  .add('align right', () => (
    <ProfilePreview
      profile={{
        avatar: function avatar() {
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
        affiliation: {
          jobtitle: 'Senior Financial Analyst',
          organization: 'Block, Bruen and Gerlach',
        },
        badges: [
          {
            link: { text: 'Committee Member', href: '/committee' },
            mode: 'red',
          },
          {
            link: { text: 'Keynote Speaker', href: '/keynotes' },
            mode: 'yellow',
          },
        ],
      }}
      align="right"
      m={2}
    />
  ))
  .add('avatar only', () => (
    <ProfilePreview
      profile={{
        avatar: function avatar() {
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
      }}
      m={2}
    />
  ))
  .add('avatar and name only', () => (
    <ProfilePreview
      profile={{
        avatar: function avatar() {
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
        name: 'Suzy Cahan',
      }}
      m={2}
    />
  ))
  .add('responsive avatar', () => (
    <ProfilePreview
      profile={{
        avatar: function avatar() {
          return (
            <Image
              alt="Sandra Abramovici"
              borderRadius="circle"
              height={[32, 64, 128]}
              width={[32, 64, 128]}
              src="/avatar5.png"
            />
          );
        },
        name: 'Sandra Abramovici',
      }}
      m={2}
    />
  ))
  .add('custom font size', () => (
    <ProfilePreview
      profile={{
        avatar: function avatar() {
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
        name: 'Jan McKea',
      }}
      fontSize={[5, 6]}
      m={2}
    />
  ))
  .add('really long strings', () => (
    <ProfilePreview
      profile={{
        avatar: function avatar() {
          return (
            <Image
              alt="Really really really really really really really really really really long name"
              borderRadius="circle"
              height={128}
              width={128}
              src="/avatar7.png"
            />
          );
        },
        name:
          'Really really really really really really really really really really long name',
        affiliation: {
          jobtitle:
            'Really really really really really really really really really really long jobtitle',
          organization:
            'Really really really really really really really really really really long organization',
        },
        badges: [
          {
            link: { text: 'Committee Member', href: '/committee' },
            mode: 'red',
          },
          {
            link: {
              text: 'Keynote Speaker',
              href: '/keynote-speakers',
            },
            mode: 'yellow',
          },
        ],
      }}
      m={2}
    />
  ));
