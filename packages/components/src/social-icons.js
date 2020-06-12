import React from 'react';
import { arrayOf, number, oneOf, oneOfType, shape, string } from 'prop-types';
import { Box, Flex, Link } from 'theme-ui';

import EmailIcon from './email-icon';
import GitHubIcon from './github-icon';
import TwitterIcon from './twitter-icon';
import { normalizeAlign } from './util';

/**
 * SocialIcons are used like fonts, i.e. they use whatever the inherited color is.
 */

// Supported social media platforms.
const lookup = {
  twitter: {
    url: (username) => `https://twitter.com/${username}`,
    Icon: TwitterIcon,
  },
  github: {
    url: (username) => `https://github.com/${username}`,
    Icon: GitHubIcon,
  },
  email: {
    url: (username) => `mailto:${username}`,
    Icon: EmailIcon,
  },
};

const SocialIcons = ({ platforms, align = 'start', size, ...props }) => {
  return (
    <Box {...props}>
      <Flex
        sx={{
          flexWrap: 'wrap',
          justifyContent: normalizeAlign(align),
          alignItems: 'center',
          mx: -2,
        }}
      >
        {platforms.map(({ id, username, title }) => {
          const { url, Icon } = lookup[id];
          return (
            <Link
              key={id}
              href={url(username)}
              sx={{ color: 'inherit', mx: 2 }}
            >
              <Icon size={size} title={title} />
            </Link>
          );
        })}
      </Flex>
    </Box>
  );
};

const alignments = ['start', 'center', 'end'];
const alignType = oneOf(alignments);

SocialIcons.propTypes = {
  // Array defines sequence in which social icons are displayed.
  platforms: arrayOf(
    shape({
      id: string.isRequired,
      username: string.isRequired,
      title: string.isRequired,
    })
  ).isRequired,
  align: oneOfType([alignType, arrayOf(alignType)]),
  size: oneOfType([number, arrayOf(number)]),
};

export default SocialIcons;
