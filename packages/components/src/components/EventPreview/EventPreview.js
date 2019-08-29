import React from 'react';
import { Box, Flex, Text } from 'rebass';
import { eventType } from '../../types';
import SmartLink from '../SmartLink';
import Badge from '../Badge';

const UnlinkedEventPreview = ({ event, ...props }) => {
  const mb = event.description ? 3 : 0;
  return (
    <Flex {...props} flexDirection="column">
      <Box mb={2}>
        <Badge>{event.type}</Badge>
      </Box>
      {event.title()}
      {event.speakers()}
      <Text
        as="time"
        color="text"
        css="display: block;"
        fontFamily="body"
        mb={mb}
      >
        {`${event.start} ${event.timezone} (${event.duration})`}
      </Text>
      {event.description && event.description()}
    </Flex>
  );
};

UnlinkedEventPreview.propTypes = {
  event: eventType.isRequired,
};

const EventPreview = ({ event, ...props }) => {
  if (event.href) {
    return (
      <SmartLink css="display: block;" {...props} href={event.href}>
        <UnlinkedEventPreview event={event} />
      </SmartLink>
    );
  }
  return <UnlinkedEventPreview {...props} event={event} />;
};

EventPreview.propTypes = {
  event: eventType.isRequired,
};

export default EventPreview;
