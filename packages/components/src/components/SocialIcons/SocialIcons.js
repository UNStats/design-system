import React from 'react';
import { oneOf, object } from 'prop-types';
import { Box, Flex } from 'theme-ui';

import SmartLink from '../SmartLink';
import { EmailIcon, GitHubIcon, TwitterIcon } from '../../icons';

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

const SocialIcons = ({ usernames, variant = 'branded', ...props }) => (
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

export const variants = ['branded', 'primary', 'secondary'];
const variantType = oneOf(variants);

SocialIcons.propTypes = {
  usernames: object.isRequired,
  variant: variantType,
};

SocialIcons.defaultProps = {
  variant: 'branded',
};

export default SocialIcons;
