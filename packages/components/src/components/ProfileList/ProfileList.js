import React from 'react';
import { arrayOf } from 'prop-types';
import GridList from '../GridList';
import ProfilePreview from '../ProfilePreview';
import { profileWithIdType } from '../../types';

const ProfileList = ({ profiles, ...props }) => (
  <GridList
    {...props}
    align="center"
    gridGap={3}
    gridTemplateColumns="repeat(auto-fit, 256px)"
    render={({ id, ...profile }) => (
      <ProfilePreview profile={profile} key={id} />
    )}
    values={profiles}
  />
);

ProfileList.propTypes = {
  profiles: arrayOf(profileWithIdType).isRequired,
};

export default ProfileList;
