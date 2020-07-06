import React from 'react';
import { arrayOf, oneOf, oneOfType, shape, string, node } from 'prop-types';
import { Box, Flex } from 'theme-ui';

import { normalizeAlign } from './util';

const SocialIcons = ({ values, align = 'start', ...props }) => {
  return (
    <Box {...props}>
      <Flex
        sx={{
          flexWrap: 'wrap',
          justifyContent: normalizeAlign(align),
          alignItems: 'center',
          mx: -2,
        }}
      >
        {values.map(({ id, icon }) => (
          <Box key={id} sx={{ mx: 2 }}>
            {icon}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

const alignments = ['start', 'center', 'end'];
const alignType = oneOf(alignments);

SocialIcons.propTypes = {
  values: arrayOf(
    shape({
      id: string.isRequired,
      icon: node.isRequired,
    })
  ).isRequired,
  align: oneOfType([alignType, arrayOf(alignType)]),
};

export default SocialIcons;
