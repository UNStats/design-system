import React from 'react';
import { Image } from 'theme-ui';
import { ProfilePreview } from '@undataforum/components';

const CompleteProfile = () => (
  <ProfilePreview
    profile={{
      avatar: (
        <Image
          alt="Nance MacFadin"
          sx={{ borderRadius: 'circle', height: 128, width: 128 }}
          src="/avatar0.png"
        />
      ),
      honorific: 'His Excellency',
      name: 'Nance MacFadin',
      jobtitle: 'Help Desk Operator',
      organization: 'Schuster-Senger',
      socialIcons: [
        {
          id: 'twitter',
          username: 'nance-mcfadin',
          title: 'Follow me on Twitter',
        },
        {
          id: 'github',
          username: 'nance-mcfadin',
          title: 'Follow me on GitHub',
        },
      ],
      badges: ['Committee Member', 'Keynote Speaker'],
    }}
    m={2}
  />
);

export default CompleteProfile;
