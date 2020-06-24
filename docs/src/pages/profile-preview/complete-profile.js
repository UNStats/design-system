import React from 'react';
import { Image, ThemeProvider } from 'theme-ui';
import preset from '@theme-ui/preset-base';
import { ProfilePreview } from '@undataforum/components';

const CompleteProfile = () => (
  <ThemeProvider theme={preset}>
    <ProfilePreview
      profile={{
        avatar: (
          <Image
            alt="Nance MacFadin"
            sx={{
              borderRadius: '50%',
              height: 128,
              width: 128,
            }}
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
  </ThemeProvider>
);

export default CompleteProfile;
