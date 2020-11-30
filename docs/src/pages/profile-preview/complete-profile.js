import React from 'react';
import { Heading, Link, Image, ThemeProvider } from 'theme-ui';
import preset from '@undataforum/preset';
import {
  GitHubIcon,
  ProfilePreview,
  SocialIcons,
  TwitterIcon,
} from '@undataforum/components';

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
        name: (
          <Heading as="div" sx={{ fontSize: 4, textAlign: 'center' }}>
            Nance MacFadin
          </Heading>
        ),
        jobtitle: 'Help Desk Operator',
        organization: 'Schuster-Senger',
        socialIcons: (
          <SocialIcons
            values={[
              {
                id: 'twitter',
                icon: (
                  <Link
                    href="https://twitter.com/nance-mcfadin"
                    sx={{ color: 'inherit' }}
                  >
                    <TwitterIcon size={24} title="Follow me on Twitter" />
                  </Link>
                ),
              },
              {
                id: 'github',
                icon: (
                  <Link
                    href="https://github.com/nance-mcfadin"
                    sx={{ color: 'inherit' }}
                  >
                    <GitHubIcon size={24} title="Follow me on GitHub" />
                  </Link>
                ),
              },
            ]}
            m={1}
          />
        ),
        badges: ['Committee Member', 'Keynote Speaker'],
      }}
      m={2}
    />
  </ThemeProvider>
);

export default CompleteProfile;
