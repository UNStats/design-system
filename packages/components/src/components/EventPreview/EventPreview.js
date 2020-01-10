import React from 'react';
import { func, shape, oneOf, oneOfType, string, arrayOf } from 'prop-types';
import { Button, Flex, Text } from '@theme-ui/components';

import SmartLink from '../SmartLink';
import Badge from '../Badge';

const normalizeAlign = align => {
  const alignments = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
  };
  if (Array.isArray(align)) {
    return align.map(alignment => alignments[alignment]);
  }
  return alignments[align];
};

// How margins work in this component:
// What the title prop renders (heading) may have no top margin, only bottom margin.
// What the description prop renders (paragraph) may have no top margin, only bottom margin.
const EventPreview = ({
  event,
  colors = { text: 'text', background: 'background', accent: 'primary' },
  align = 'start',
  ...props
}) => (
  <Flex
    {...props}
    sx={{
      flexDirection: 'column',
      alignItems: normalizeAlign(align),
      fontFamily: 'body',
      color: colors.text,
      bg: colors.background,
    }}
  >
    <Badge
      color={colors.background}
      bg={colors.accent}
      sx={{ alignSelf: normalizeAlign(align), mb: 1 }}
    >
      {event.type}
    </Badge>
    {event.title(align)}
    {event.speakers(align)}
    <Text
      as="time"
      sx={{
        display: 'block',
        textAlign: align,
        mb: event.description || event.links ? 3 : 0,
      }}
    >
      {`${event.date} (${event.duration})`}
    </Text>
    {event.description && event.description(align)}
    {event.links && (
      <Flex
        sx={{
          flexGrow: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
        }}
      >
        {event.links.page && (
          <Button
            as={SmartLink}
            sx={{
              color: colors.background,
              bg: colors.accent,
              // Right margin only if there is a registration button.
              mr: event.links.registration ? [2, 3] : 0,
            }}
            href={event.links.page}
          >
            Details
          </Button>
        )}
        {event.links.registration && (
          <Button
            as={SmartLink}
            sx={{ color: colors.accent }}
            href={event.links.registration}
            variant="outline"
          >
            Register
          </Button>
        )}
      </Flex>
    )}
  </Flex>
);

export const alignments = ['start', 'center', 'end'];
const alignType = oneOf(alignments);

export const eventType = shape({
  type: string.isRequired,
  title: func.isRequired,
  date: string.isRequired,
  duration: string.isRequired,
  speakers: func.isRequired,
  description: func,
  links: shape({
    page: string,
    registration: string,
  }),
});

EventPreview.propTypes = {
  event: eventType.isRequired,
  colors: shape({
    text: string.isRequired,
    background: string.isRequired,
    accent: string.isRequired,
  }),
  align: oneOfType([alignType, arrayOf(alignType)]),
};

export default EventPreview;
