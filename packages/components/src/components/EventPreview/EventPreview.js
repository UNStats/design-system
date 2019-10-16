import React from 'react';
import { func, shape, string } from 'prop-types';
import { Flex, Text } from 'rebass';
import SmartLink from '../SmartLink';
import Badge from '../Badge';

export const eventType = shape({
  type: string.isRequired,
  title: func.isRequired,
  date: string.isRequired,
  duration: string.isRequired,
  speakers: func.isRequired,
  description: func,
  href: string,
});

const UnlinkedEventPreview = ({ event, ...props }) => {
  const mb = event.description ? 3 : 0;
  return (
    <Flex {...props} sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <Badge text={event.type} mb={2} />
      {event.title()}
      {event.speakers()}
      <Text
        as="time"
        sx={{ color: 'text', display: 'block', fontFamily: 'body', mb }}
      >
        {`${event.date} (${event.duration})`}
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
      <SmartLink css={{ display: 'block' }} {...props} href={event.href}>
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
