import React from 'react';
import { arrayOf, func, oneOf, shape, string } from 'prop-types';
import { Grid } from 'theme-ui/';

import ProfilePreview from '../ProfilePreview';
import SmartLink from '../SmartLink';

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

export const alignments = ['start', 'center', 'end'];
const alignType = oneOf(alignments);

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
  align: alignType,
};

export default Avatars;
