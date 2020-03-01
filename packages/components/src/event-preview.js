import React from 'react';
import { node, shape, string } from 'prop-types';
import { Button, Flex, Text } from 'theme-ui';

import Badges from './badges';
import SmartLink from './smart-link';

// How margins work in this component:
// What the title prop renders (heading) may have no top margin, only bottom margin.
// What the description prop renders (paragraph) may have no top margin, only bottom margin.
const EventPreview = ({ event, variant = 'primary', ...props }) => (
  <Flex
    {...props}
    sx={{
      flexDirection: 'column',
      alignItems: 'flex-start',
      fontFamily: 'body',
    }}
  >
    {event.tag && (
      <Badges values={[event.tag]} variant={variant}>
        {event.tag}
      </Badges>
    )}
    {event.title}
    {event.speakers && event.speakers}
    <Text
      as="time"
      sx={{
        display: 'block',
        textAlign: 'start',
        mb: event.description || event.links ? 3 : 0,
      }}
    >
      {`${event.date} (${event.duration})`}
    </Text>
    {event.description && event.description}
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
              // Right margin only if there is a registration button.
              mr: event.links.registration ? [2, 3] : 0,
            }}
            href={event.links.page}
            variant={variant}
          >
            Details
          </Button>
        )}
        {event.links.registration && (
          <Button
            as={SmartLink}
            href={event.links.registration}
            variant={`buttons.outline.${variant}`}
          >
            Register
          </Button>
        )}
      </Flex>
    )}
  </Flex>
);

export const eventType = shape({
  tag: string,
  title: node.isRequired,
  date: string.isRequired,
  duration: string.isRequired,
  speakers: node,
  description: node,
  links: shape({
    page: string,
    registration: string,
  }),
});

EventPreview.propTypes = {
  event: eventType.isRequired,
  variant: string,
};

export default EventPreview;
