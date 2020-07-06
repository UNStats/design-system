import React from 'react';
import { arrayOf, node, oneOf, oneOfType, shape, string } from 'prop-types';
import { Flex, Text } from 'theme-ui';

import Badges from './badges';
import { normalizeAlign } from './util';

const ProfilePreview = ({
  profile,
  align = 'center',
  variant = 'badges.primary',
  ...props
}) => (
  <Flex
    {...props}
    sx={{
      flexDirection: 'column',
      alignItems: normalizeAlign(align),
      fontFamily: 'body',
    }}
  >
    {profile.avatar}
    {profile.honorific && (
      <Text
        sx={{
          fontSize: 1,
          lineHeight: 'body',
          textAlign: align,
        }}
      >
        {profile.honorific}
      </Text>
    )}
    {profile.name}
    {profile.jobtitle && (
      <Text
        sx={{
          fontSize: 2,
          lineHeight: 'body',
          textAlign: align,
        }}
      >
        {profile.jobtitle}
      </Text>
    )}
    {profile.organization && (
      <Text
        sx={{
          fontSize: 2,
          fontWeight: 'bold',
          lineHeight: 'body',
          textAlign: align,
        }}
      >
        {profile.organization}
      </Text>
    )}
    {profile.socialIcons}
    {profile.badges && (
      <Badges values={profile.badges} align={align} variant={variant} mt={2} />
    )}
  </Flex>
);

const alignments = ['start', 'center', 'end'];
const alignType = oneOf(alignments);

ProfilePreview.propTypes = {
  profile: shape({
    avatar: node.isRequired,
    honorific: string,
    name: node,
    jobtitle: string,
    organization: string,
    socialIcons: arrayOf(
      shape({
        id: string.isRequired,
        username: string.isRequired,
        title: string,
      }).isRequired
    ),
    badges: arrayOf(string),
  }).isRequired,
  align: oneOfType([alignType, arrayOf(alignType)]),
  variant: string,
};

export default ProfilePreview;
