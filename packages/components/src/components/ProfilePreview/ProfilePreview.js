import React from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import { Flex, Text } from '@theme-ui/components';

import { alignType, responsiveNumberType } from '../../types';
import { badgeType } from '../Badge';
import Badges from '../Badges';

const ProfilePreview = ({
  profile,
  fontSize = [3, 4],
  variant = 'center',
  ...props
}) => {
  return (
    <Flex
      {...props}
      sx={{ flexDirection: 'column' }}
      variant={`profilePreview.${variant}`}
    >
      {profile.avatar()}
      {profile.honorific && (
        <Text
          sx={{
            color: 'text',
            fontFamily: 'body',
            fontSize: 1,
            lineHeight: 'body',
            textAlign: variant,
          }}
        >
          {profile.honorific}
        </Text>
      )}
      <Text
        as="h1"
        sx={{
          color: 'text',
          fontFamily: 'body',
          fontSize,
          lineHeight: 'heading',
          textAlign: variant,
          mt: 0,
          mb: 0,
        }}
      >
        {profile.name}
      </Text>
      {profile.jobtitle && (
        <Text
          sx={{
            color: 'text',
            fontFamily: 'body',
            fontSize: 2,
            lineHeight: 'body',
            textAlign: variant,
          }}
        >
          {profile.jobtitle}
        </Text>
      )}
      {profile.organization && (
        <Text
          sx={{
            color: 'text',
            fontFamily: 'body',
            fontSize: 2,
            fontWeight: 'bold',
            lineHeight: 'body',
            textAlign: variant,
          }}
        >
          {profile.organization}
        </Text>
      )}
      {profile.badges && (
        <Badges values={profile.badges} variant={variant} mt={2} />
      )}
    </Flex>
  );
};

export const profileType = shape({
  avatar: func.isRequired,
  honorific: string,
  name: string,
  jobtitle: string,
  organization: string,
  badges: arrayOf(badgeType),
});

ProfilePreview.propTypes = {
  profile: profileType.isRequired,
  fontSize: responsiveNumberType,
  variant: alignType,
};

export default ProfilePreview;
