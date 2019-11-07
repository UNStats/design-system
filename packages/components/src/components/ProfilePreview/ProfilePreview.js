import React from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import { Flex, Text } from '@theme-ui/components';

import { alignType, responsiveNumberType } from '../../types';
import SmartLink from '../SmartLink';
import { badgeType } from '../Badge';
import Badges from '../Badges';

export const profileType = shape({
  avatar: func.isRequired,
  honorific: string,
  name: string,
  jobtitle: string,
  organization: string,
  badges: arrayOf(shape(badgeType)),
  href: string,
});

const UnlinkedProfilePreview = ({ profile, align, fontSize, ...props }) => {
  // Map align prop to alignItems.
  let alignItems;
  if (align === 'left') {
    alignItems = 'flex-start';
  } else if (align === 'right') {
    alignItems = 'flex-end';
  } else {
    alignItems = 'center';
  }

  return (
    <Flex {...props} sx={{ flexDirection: 'column', alignItems }}>
      {profile.avatar()}
      {profile.honorific && (
        <Text
          sx={{
            color: 'text',
            fontFamily: 'body',
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
          color: 'text',
          fontFamily: 'body',
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
            color: 'text',
            fontFamily: 'body',
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
            color: 'text',
            fontFamily: 'body',
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
        <Badges values={profile.badges} variant={align} mt={2} />
      )}
    </Flex>
  );
};

// Internal component requires all props because we have control over what props it receives.
UnlinkedProfilePreview.propTypes = {
  profile: profileType.isRequired,
  align: alignType.isRequired,
  fontSize: responsiveNumberType.isRequired,
};

const ProfilePreview = ({
  profile,
  align = 'center',
  fontSize = [3, 4],
  ...props
}) => {
  if (profile.href) {
    return (
      <SmartLink {...props} href={profile.href}>
        <UnlinkedProfilePreview
          profile={profile}
          align={align}
          fontSize={fontSize}
        />
      </SmartLink>
    );
  }
  return (
    <UnlinkedProfilePreview
      {...props}
      profile={profile}
      align={align}
      fontSize={fontSize}
    />
  );
};

ProfilePreview.propTypes = {
  profile: profileType.isRequired,
  align: alignType,
  fontSize: responsiveNumberType,
};

export default ProfilePreview;
