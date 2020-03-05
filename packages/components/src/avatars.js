import React from 'react';
import { arrayOf, node, oneOf, oneOfType, shape, string } from 'prop-types';
import { Grid } from 'theme-ui';

import ProfilePreview from './profile-preview';
import SmartLink from './smart-link';

const Avatars = ({ values, align = 'start', ...props }) => (
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
        key={id}
        css={{ ':hover': { textDecoration: 'none' } }}
        href={href}
        variant="inherit"
      >
        <ProfilePreview profile={{ avatar, name }} fontSize={1} align={align} />
      </SmartLink>
    ))}
  </Grid>
);

const alignments = ['start', 'center', 'end'];
const alignType = oneOf(alignments);

Avatars.propTypes = {
  values: arrayOf(
    shape({
      id: string.isRequired,
      avatar: node.isRequired,
      name: string,
      href: string.isRequired,
    })
  ).isRequired,
  align: oneOfType([alignType, arrayOf(alignType)]),
};

export default Avatars;
