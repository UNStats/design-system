import React from 'react';
import { oneOf, object } from 'prop-types';
import { Flex } from '@theme-ui/components';

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
          <Icon width={[32, 48]} />
        </SmartLink>
      );
    })}
  </Flex>
);

export const variants = [
  'branded',
  'transparent',
  'primary',
  'secondary',
  'inverse',
];
const variantType = oneOf(variants);

SocialIcons.propTypes = {
  usernames: object.isRequired,
  variant: variantType,
};

SocialIcons.defaultProps = {
  variant: 'branded',
};

export default SocialIcons;
