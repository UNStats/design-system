import React from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import { Grid } from 'theme-ui';

import { responsiveAlignType } from '../types';

import ProfilePreview from './profile-preview';
import SmartLink from './smart-link';

const Avatars = ({
  values,
  colors = { text: 'text', background: 'background', accent: 'primary' },
  align = 'start',
  ...props
}) => (
  <Grid
    {...props}
    gap={2}
    sx={{
      gridTemplateColumns: 'repeat(auto-fit, 96px)',
      justifyItems: align,
      justifyContent: align,
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
          align={align}
          colors={colors}
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
  colors: shape({
    text: string.isRequired,
    background: string.isRequired,
    accent: string.isRequired,
  }),
  align: responsiveAlignType,
};

export default Avatars;
