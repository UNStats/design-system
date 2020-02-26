import React from 'react';
import { oneOf, object } from 'prop-types';
import { Box, Flex } from 'theme-ui';

import EmailIcon from './email-icon';
import GitHubIcon from './github-icon';
import SmartLink from './smart-link';
import TwitterIcon from './twitter-icon';

const services = [
  {
    id: 'twitter',
    url: username => `https://twitter.com/${username}`,
    Icon: TwitterIcon,
  },
  {
    id: 'github',
    url: username => `https://github.com/${username}`,
    Icon: GitHubIcon,
  },
  { id: 'email', url: username => `mailto:${username}`, Icon: EmailIcon },
];

const SocialIcons = ({ usernames, variant = 'primary', ...props }) => (
  <Flex
    {...props}
    sx={{ flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}
  >
    {services.map(({ id, url, Icon }) => {
      if (!usernames[id]) {
        return null;
      }
      return (
        <SmartLink
          href={url(usernames[id])}
          key={id}
          variant={variant}
          m={[2, 3]}
        >
          <Box sx={{ width: [32, 48] }}>
            <Icon scaleTo="width" />
          </Box>
        </SmartLink>
      );
    })}
  </Flex>
);

const variants = ['primary', 'secondary', 'inherit'];
const variantType = oneOf(variants);

SocialIcons.propTypes = {
  usernames: object.isRequired,
  variant: variantType,
};

export default SocialIcons;
