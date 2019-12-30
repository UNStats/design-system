import React from 'react';
import { arrayOf, func, oneOf, shape, string } from 'prop-types';
import { Flex, Text } from '@theme-ui/components';

import { responsiveNumberType } from '../../types';
import Badges from '../Badges';

const alignItems = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
};

const ProfilePreview = ({
  profile,
  fontSize = [3, 4],
  colors = { text: 'text', background: 'background', accent: 'primary' },
  align = 'center',
  ...props
}) => {
  return (
    <Flex
      {...props}
      sx={{
        flexDirection: 'column',
        alignItems: alignItems[align],
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
};

export const alignments = ['start', 'center', 'end'];
const alignType = oneOf(alignments);

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
  align: alignType,
  fontSize: responsiveNumberType,
};

export default ProfilePreview;
