import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from 'rebass';
import ProfilePreview from './ProfilePreview';

storiesOf('Components/ProfilePreview', module)
  .add('complete profile', () => (
    <ProfilePreview
      profile={{
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
        honorific: 'His Excellency',
        name: 'Nance MacFadin',
        jobtitle: 'Help Desk Operator',
        organization: 'Schuster-Senger',
        badges: [
          { text: 'Committee Member', href: '/committee', mode: 'red' },
          {
            text: 'Keynote Speaker',
            href: '/keynote-speakers',
            mode: 'yellow',
          },
        ],
      }}
      m={2}
    />
  ))
  .add('no jobtitle', () => (
    <ProfilePreview
      profile={{
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
        organization: 'Schuster-Senger',
        badges: [
          { text: 'Committee Member', href: '/committee', mode: 'red' },
          {
            text: 'Keynote Speaker',
            href: '/keynote-speakers',
            mode: 'yellow',
          },
        ],
      }}
      m={2}
    />
  ))
  .add('no organization', () => (
    <ProfilePreview
      profile={{
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
        badges: [
          { text: 'Committee Member', href: '/committee', mode: 'red' },
          {
            text: 'Keynote Speaker',
            href: '/keynote-speakers',
            mode: 'yellow',
          },
        ],
      }}
      m={2}
    />
  ))
  .add('no jobtitle and no organization', () => (
    <ProfilePreview
      profile={{
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
        badges: [
          { text: 'Committee Member', href: '/committee', mode: 'red' },
          {
            text: 'Keynote Speaker',
            href: '/keynote-speakers',
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
        avatar() {
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
        jobtitle: 'Staff Scientist',
        organization: 'Ritchie Inc',
        badges: [
          { text: 'Committee Member', href: '/committee', mode: 'red' },
          {
            text: 'Keynote Speaker',
            href: '/keynotes',
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
        badges: [
          { text: 'Committee Member', href: '/committee', mode: 'red' },
          {
            text: 'Keynote Speaker',
            href: '/keynotes',
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
      }}
      m={2}
    />
  ))
  .add('avatar and name only', () => (
    <ProfilePreview
      profile={{
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
        name: 'Suzy Cahan',
      }}
      m={2}
    />
  ))
  .add('responsive avatar', () => (
    <ProfilePreview
      profile={{
        avatar() {
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
        name: 'Jan McKea',
      }}
      fontSize={[5, 6]}
      m={2}
    />
  ))
  .add('really long strings', () => (
    <ProfilePreview
      profile={{
        avatar() {
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
        jobtitle:
          'Really really really really really really really really really really long jobtitle',
        organization:
          'Really really really really really really really really really really long organization',
        badges: [
          { text: 'Committee Member', href: '/committee', mode: 'red' },
          {
            text: 'Keynote Speaker',
            href: '/keynote-speakers',
            mode: 'yellow',
          },
        ],
      }}
      m={2}
    />
  ));
