import React from 'react';
import { func, shape, string } from 'prop-types';
import { Button, Flex, Text } from '@theme-ui/components';

import SmartLink from '../SmartLink';
import Badge from '../Badge';

// How margins work in this component:
// What the title prop renders (heading) may have no top margin, only bottom margin.
// What the description prop renders (paragraph) may have no top margin, only bottom margin.
const EventPreview = ({
  event,
  colors = { text: 'text', background: 'background', accent: 'primary' },
  ...props
}) => (
  <Flex
    {...props}
    sx={{
      flexDirection: 'column',
      alignItems: 'flex-start',
      fontFamily: 'body',
      color: colors.text,
      bg: colors.background,
    }}
  >
    <Badge color={colors.background} bg={colors.accent}>
      {event.type}
    </Badge>
    {event.title()}
    {event.speakers()}
    <Text
      as="time"
      sx={{
        display: 'block',
        mb: event.description || event.links ? 3 : 0,
      }}
    >
      {`${event.date} (${event.duration})`}
    </Text>
    {event.description && event.description()}
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
            sx={{ color: colors.background, bg: colors.accent, mr: [2, 3] }}
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
};

export default EventPreview;
