import React from 'react';
import { func, shape, string } from 'prop-types';
import { Button, Flex, Text } from '@theme-ui/components';

import SmartLink from '../SmartLink';
import Badge from '../Badge';

// How margins work in this component:
// What the title prop renders (heading) may have no top margin, only bottom margin.
// What the description prop renders (paragraph) may have no top margin, only bottom margin.
const EventPreview = ({ event, ...props }) => (
  <Flex {...props} sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
    <Badge
      value={{ text: event.type, variant: 'secondary' }}
      mb={[2, null, 3]}
    />
    {event.title()}
    {event.speakers()}
    <Text
      as="time"
      sx={{
        display: 'block',
        fontFamily: 'body',
        mb: event.description || event.links ? 3 : 0,
      }}
    >
      {`${event.date} (${event.duration})`}
    </Text>
    {event.description && event.description()}
    {event.links && (
      <Flex
        sx={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          flexGrow: 1,
          alignItems: 'flex-end',
        }}
      >
        {event.links.page && (
          <Button
            as={SmartLink}
            sx={{ fontFamily: 'body', mr: [2, 3] }}
            href={event.links.page}
          >
            Details
          </Button>
        )}
        {event.links.registration && (
          <Button
            as={SmartLink}
            sx={{ fontFamily: 'body' }}
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
};

export default EventPreview;
