import React from 'react';
import { Link, ThemeProvider } from 'theme-ui';
import preset from '@undataforum/preset';
import {
  EmailIcon,
  GitHubIcon,
  SocialIcons,
  TwitterIcon,
} from '@undataforum/components';

const AlignStart = () => (
  <ThemeProvider theme={preset}>
    <SocialIcons
      values={[
        {
          id: 'twitter',
          icon: (
            <Link
              href="https://twitter.com/undataforum"
              sx={{ color: 'inherit' }}
            >
              <TwitterIcon size={48} title="Follow us on Twitter" />
            </Link>
          ),
        },
        {
          id: 'github',
          icon: (
            <Link
              href="https://github.com/undataforum"
              sx={{ color: 'inherit' }}
            >
              <GitHubIcon size={48} title="Follow us on GitHub" />
            </Link>
          ),
        },
        {
          id: 'email',
          icon: (
            <Link href="mailto:dataforum@un.org" sx={{ color: 'inherit' }}>
              <EmailIcon size={48} title="Send us an email" />
            </Link>
          ),
        },
      ]}
      m={2}
    />
  </ThemeProvider>
);

export default AlignStart;
