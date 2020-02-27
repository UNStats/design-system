import React from 'react';
import { arrayOf, number, oneOf, oneOfType, shape, string } from 'prop-types';
import { Flex } from 'theme-ui';

import EmailIcon from './email-icon';
import GitHubIcon from './github-icon';
import TwitterIcon from './twitter-icon';
import SmartLink from './smart-link';

// Supported social media platforms.
const lookup = {
  twitter: {
    url: username => `https://twitter.com/${username}`,
    Icon: TwitterIcon,
  },
  github: {
    url: username => `https://github.com/${username}`,
    Icon: GitHubIcon,
  },
  email: {
    url: username => `mailto:${username}`,
    Icon: EmailIcon,
  },
};

const SocialIcons = ({ platforms, size, variant = 'primary', ...props }) => {
  return (
    <Flex
      {...props}
      sx={{ flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}
    >
      {platforms.map(({ id, username, title }) => {
        const { url, Icon } = lookup[id];
        return (
          <SmartLink key={id} href={url(username)} variant={variant} m={2}>
            <Icon size={size} title={title} />
          </SmartLink>
        );
      })}
    </Flex>
  );
};

SocialIcons.propTypes = {
  // Array defines sequence in which social icons are displayed.
  platforms: arrayOf(
    shape({
      id: string.isRequired,
      username: string.isRequired,
      title: string.isRequired,
    })
  ).isRequired,
  size: oneOfType([number, arrayOf(number)]),
  variant: oneOf(['primary', 'secondary', 'inherit']),
};

export default SocialIcons;
