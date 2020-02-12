import React from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import { Flex, Text } from 'theme-ui';

import { responsiveAlignType, responsiveNumberType } from './types';
import Badges from './badges';
import { normalizeAlign } from './util';

const ProfilePreview = ({
  profile,
  fontSize = [3, 4],
  colors = { text: 'text', background: 'background', accent: 'primary' },
  align = 'center',
  ...props
}) => (
  <Flex
    {...props}
    sx={{
      flexDirection: 'column',
      alignItems: normalizeAlign(align),
      fontFamily: 'body',
      color: colors.text,
      bg: colors.background,
    }}
  >
    {profile.avatar()}
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
    <Text
      as="h1"
      sx={{
        fontSize,
        lineHeight: 'heading',
        textAlign: align,
        mt: 0,
        mb: 0,
      }}
    >
      {profile.name}
    </Text>
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
    {profile.badges && (
      <Badges
        values={profile.badges}
        color={colors.background}
        bg={colors.accent}
        mt={2}
      />
    )}
  </Flex>
);

export const profileType = shape({
  avatar: func.isRequired,
  honorific: string,
  name: string,
  jobtitle: string,
  organization: string,
  badges: arrayOf(string),
});

ProfilePreview.propTypes = {
  profile: profileType.isRequired,
  colors: shape({
    text: string.isRequired,
    background: string.isRequired,
    accent: string.isRequired,
  }),
  align: responsiveAlignType,
  fontSize: responsiveNumberType,
};

export default ProfilePreview;
