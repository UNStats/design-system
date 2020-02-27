import React from 'react';
import { oneOf, object } from 'prop-types';
import { Flex } from 'theme-ui';

import EmailIcon from './email-icon';
import GitHubIcon from './github-icon';
import TwitterIcon from './twitter-icon';
import SmartLink from './smart-link';

const services = [
  {
    id: 'twitter',
    url: username => `https://twitter.com/${username}`,
    icon: <TwitterIcon size={[24, 32, 48]} title="Follow us on Twitter" />,
  },
  {
    id: 'github',
    url: username => `https://github.com/${username}`,
    icon: <GitHubIcon size={[24, 32, 48]} title="Follow us on GitHub" />,
  },
  {
    id: 'email',
    url: username => `mailto:${username}`,
    icon: <EmailIcon size={[24, 32, 48]} title="Send us an e-mail" />,
  },
];

const SocialIcons = ({ usernames, variant = 'primary', ...props }) => (
  <Flex
    {...props}
    sx={{ flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}
  >
    {services.map(({ id, url, icon }) => {
      if (!usernames[id]) {
        return null;
      }
      return (
        <SmartLink key={id} href={url(usernames[id])} variant={variant} m={2}>
          {icon}
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
