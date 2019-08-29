import React from 'react';
import { Flex, Text } from 'rebass';
import { alignType, profileType, responsiveNumberType } from '../../types';
import Badge from '../Badge';
import FlexList from '../FlexList';
import SmartLink from '../SmartLink';

const style = {
  left: {
    alignItems: 'flex-start',
    css: { 'a:last-child': { 'margin-right': 0 } },
    ml: 0,
    mr: 2,
  },
  center: {
    alignItems: 'center',
    css: {
      'a:first-child': { 'margin-left': 0 },
      'a:last-child': { 'margin-right': 0 },
    },
    ml: 1,
    mr: 1,
  },
  right: {
    alignItems: 'flex-end',
    css: { 'a:first-child': { 'margin-left': 0 } },
    ml: 2,
    mr: 0,
  },
};

const UnlinkedProfilePreview = ({ profile, align, fontSize, ...props }) => (
  <Flex {...props} flexDirection="column" alignItems={style[align].alignItems}>
    {profile.avatar()}
    {profile.honorific && (
      <Text color="text" fontSize={1} textAlign={align}>
        {profile.honorific}
      </Text>
    )}
    <Text
      as="h1"
      color="text"
      fontFamily="body"
      fontSize={fontSize}
      textAlign={align}
      mt={0}
      mb={0}
    >
      {profile.name}
    </Text>
    {profile.jobtitle && (
      <Text color="text" fontFamily="body" fontSize={2} textAlign={align}>
        {profile.jobtitle}
      </Text>
    )}
    {profile.organization && (
      <Text
        color="text"
        fontFamily="body"
        fontSize={2}
        fontWeight="bold"
        textAlign={align}
      >
        {profile.organization}
      </Text>
    )}
    {profile.badges && (
      <FlexList
        css={style[align].css}
        mt={3}
        render={badge => (
          <Badge
            href={badge.href}
            mode={badge.mode}
            key={badge.text}
            ml={style[align].ml}
            mr={style[align].mr}
          >
            {badge.text}
          </Badge>
        )}
        values={profile.badges}
      />
    )}
  </Flex>
);

// Internal component requires all props because we have control over what props it receives.
UnlinkedProfilePreview.propTypes = {
  profile: profileType.isRequired,
  align: alignType.isRequired,
  fontSize: responsiveNumberType.isRequired,
};

const ProfilePreview = ({ profile, align, fontSize, ...props }) => {
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

ProfilePreview.defaultProps = {
  align: 'center',
  fontSize: [3, 4],
};

export default ProfilePreview;
