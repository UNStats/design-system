import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Image } from 'theme-ui';

import ProfilePreview, { alignments } from './ProfilePreview';

storiesOf('Components/ProfilePreview', module)
  .addDecorator(withKnobs)
  .add('complete profile', () => (
    <ProfilePreview
      profile={{
        avatar() {
          return (
            <Image
              alt="Nance MacFadin"
              sx={{ borderRadius: 'circle', height: 128, width: 128 }}
              src="/avatar0.png"
            />
          );
        },
        honorific: 'His Excellency',
        name: 'Nance MacFadin',
        jobtitle: 'Help Desk Operator',
        organization: 'Schuster-Senger',
        badges: ['Committee Member', 'Keynote Speaker'],
      }}
      align={select('align', alignments, 'center')}
      m={2}
    />
  ))
  .add('custom colors', () => (
    <ProfilePreview
      profile={{
        avatar() {
          return (
            <Image
              alt="Nance MacFadin"
              sx={{ borderRadius: 'circle', height: 128, width: 128 }}
              src="/avatar0.png"
            />
          );
        },
        honorific: 'His Excellency',
        name: 'Nance MacFadin',
        jobtitle: 'Help Desk Operator',
        organization: 'Schuster-Senger',
        badges: ['Committee Member', 'Keynote Speaker'],
      }}
      align={select('align', alignments, 'center')}
      colors={{
        text: 'background',
        background: 'secondary',
        accent: 'background',
      }}
      p={2}
    />
  ))
  .add('no jobtitle', () => (
    <ProfilePreview
      profile={{
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
        organization: 'Schuster-Senger',
        badges: ['Committee Member', 'Keynote Speaker'],
      }}
      align={select('align', alignments, 'center')}
      colors={{
        text: 'text',
        background: 'background',
        accent: 'secondary',
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
              sx={{ borderRadius: 'circle', height: 128, width: 128 }}
              src="/avatar0.png"
            />
          );
        },
        name: 'Nance MacFadin',
        jobtitle: 'Help Desk Operator',
        badges: ['Committee Member', 'Keynote Speaker'],
      }}
      align={select('align', alignments, 'center')}
      colors={{
        text: 'text',
        background: 'background',
        accent: 'accent',
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
              sx={{ borderRadius: 'circle', height: 128, width: 128 }}
              src="/avatar0.png"
            />
          );
        },
        name: 'Nance MacFadin',
        badges: ['Committee Member', 'Keynote Speaker'],
      }}
      align={select('align', alignments, 'center')}
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
              sx={{ borderRadius: 'circle', height: 64, width: 64 }}
              src="/avatar3.png"
            />
          );
        },
      }}
      align={select('align', alignments, 'center')}
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
              sx={{ borderRadius: 'circle', height: 128, width: 128 }}
              src="/avatar4.png"
            />
          );
        },
        name: 'Suzy Cahan',
      }}
      align={select('align', alignments, 'center')}
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
              sx={{
                borderRadius: 'circle',
                height: [32, 64, 128],
                width: [32, 64, 128],
              }}
              src="/avatar5.png"
            />
          );
        },
        name: 'Sandra Abramovici',
      }}
      align={select('align', alignments, 'center')}
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
              sx={{ borderRadius: 'circle', height: 128, width: 128 }}
              src="/avatar6.png"
            />
          );
        },
        name: 'Jan McKea',
      }}
      fontSize={[5, 6]}
      align={select('align', alignments, 'center')}
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
              sx={{ borderRadius: 'circle', height: 128, width: 128 }}
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
        badges: ['Committee Member', 'Keynote Speaker'],
      }}
      align={select('align', alignments, 'center')}
      m={2}
    />
  ));
