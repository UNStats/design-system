import React from 'react';
import { Box, Link, ThemeProvider } from 'theme-ui';
import {
  EmailIcon,
  Footer,
  GitHubIcon,
  SocialIcons,
  TwitterIcon,
} from '@undataforum/components';
import { Logo } from '@undataforum/assets';
import preset from '@theme-ui/preset-base';
import merge from 'deepmerge';

const theme = merge(preset, {
  colors: {
    primary: '#0E6A9C',
  },
  footer: {
    bg: 'primary',
  },
});

const CustomizeWithVariants = () => (
  <ThemeProvider theme={theme}>
    <Footer
      logo={
        <Box sx={{ height: [96, null, 128] }}>
          <Logo scaleTo="height" monochrome />
        </Box>
      }
      socialIcons={
        <SocialIcons
          values={[
            {
              id: 'twitter',
              icon: (
                <Link
                  href="https://twitter.com/undataforum"
                  sx={{ color: 'inherit' }}
                >
                  <TwitterIcon size={32} title="Follow us on Twitter" />
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
                  <GitHubIcon size={32} title="Follow us on GitHub" />
                </Link>
              ),
            },
            {
              id: 'email',
              icon: (
                <Link href="mailto:dataforum@un.org" sx={{ color: 'inherit' }}>
                  <EmailIcon size={32} title="Send us an email" />
                </Link>
              ),
            },
          ]}
          mb={3}
        />
      }
      links={[
        { text: 'Contact', href: '/contact' },
        { text: 'Copyright', href: '/copyright' },
        { text: 'Privacy Notice', href: '/privacy' },
        { text: 'Terms of Use', href: '/terms' },
      ]}
    />
  </ThemeProvider>
);

export default CustomizeWithVariants;
