import React from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import { Grid } from '@theme-ui/components';

import ProfilePreview from '../ProfilePreview';
import SmartLink from '../SmartLink';

const Avatars = ({ values, ...props }) => (
  <Grid
    {...props}
    gap={2}
    sx={{
      gridTemplateColumns: 'repeat(auto-fit, 96px)',
      // Stretch to full width in scenarios where Avatars is used inside Flex.
      alignSelf: 'stretch',
    }}
  >
    {values.map(({ id, avatar, name, href }) => (
      <SmartLink
        css={{ ':hover': { textDecoration: 'none' } }}
        href={href}
        key={id}
      >
        <ProfilePreview
          profile={{ avatar, name }}
          fontSize={1}
          variant="left"
        />
      </SmartLink>
    ))}
  </Grid>
);

Avatars.propTypes = {
  values: arrayOf(
    shape({
      id: string.isRequired,
      avatar: func.isRequired,
      name: string,
      href: string.isRequired,
    })
  ).isRequired,
};

export default Avatars;