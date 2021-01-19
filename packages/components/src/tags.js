import React from 'react';
import { arrayOf, number, oneOf, oneOfType, shape, string } from 'prop-types';
import { Badge, Box, Flex, Link } from 'theme-ui';

import { normalizeAlign } from './util';

// Add margin around each badge.
// Neutralize outer margins with negative margins on Flex.
const Tags = ({
  values,
  gap = 2,
  align = 'start',
  variant = 'tags.primary',
  ...props
}) => {
  // Do not render component if values array is empty.
  if (values.length === 0) return null;
  return (
    <Box {...props}>
      <Flex
        sx={{
          // flexDirection: 'row',
          justifyContent: normalizeAlign(align),
          // alignItems: 'stretch',
          flexWrap: 'wrap',
          mr: -gap,
          mb: -gap,
        }}
      >
        {values.map(({ tag, path }) => (
          <Link
            href={path}
            key={tag}
            sx={{
              textDecoration: 'none',
              mr: gap,
              mb: gap,
            }}
          >
            <Badge
              sx={{
                // Anything below variant cannot be overridden by this variant.
                variant,
                display: 'block',
              }}
              variant={variant}
            >
              {tag}
            </Badge>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

const alignments = ['start', 'center', 'end'];
const alignType = oneOf(alignments);

Tags.propTypes = {
  values: arrayOf(shape({ tag: string.isRequired, path: string.isRequired }))
    .isRequired,
  gap: number,
  align: oneOfType([alignType, arrayOf(alignType)]),
  variant: string,
};

export default Tags;
