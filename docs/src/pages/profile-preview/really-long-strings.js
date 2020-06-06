import React from 'react';
import { Image } from 'theme-ui';
import { ProfilePreview } from '@undataforum/components';

const ReallyLongStrings = () => (
  <ProfilePreview
    profile={{
      avatar: (
        <Image
          alt="Really really really really really really really really really really long name"
          sx={{ borderRadius: 'circle', height: 128, width: 128 }}
          src="/avatar7.png"
        />
      ),
      name:
        'Really really really really really really really really really really long name',
      jobtitle:
        'Really really really really really really really really really really long jobtitle',
      organization:
        'Really really really really really really really really really really long organization',
      badges: ['Committee Member', 'Keynote Speaker'],
    }}
  />
);

export default ReallyLongStrings;
