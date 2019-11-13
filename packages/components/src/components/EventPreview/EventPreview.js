import React from 'react';
import { func, shape, string } from 'prop-types';
import { Button, Flex, Text } from '@theme-ui/components';

import SmartLink from '../SmartLink';
import Badge from '../Badge';

const EventPreview = ({ event, ...props }) => (
  <Flex {...props} sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
    <Badge value={{ text: event.type, variant: 'secondary' }} />
    {event.title()}
    {event.speakers()}
    <Text
      as="time"
      sx={{ color: 'text', display: 'block', fontFamily: 'body' }}
    >
      {`${event.date} (${event.duration})`}
    </Text>
    {event.description && event.description()}
    {event.links && (
      <Flex
        sx={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          mt: event.description ? 0 : 3,
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
