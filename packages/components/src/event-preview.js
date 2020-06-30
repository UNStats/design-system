import React from 'react';
import { node, shape, string } from 'prop-types';
import { Badge, Box, Button, Flex, Link, Text } from 'theme-ui';

const EventPreview = ({ event, ...props }) => (
  <Flex
    {...props}
    sx={{
      flexDirection: 'column',
      alignItems: 'flex-start',
      fontFamily: 'body',
    }}
  >
    {event.tag && (
      <Box sx={{ mb: 2 }}>
        <Badge
          sx={{
            // Anything below variant cannot be overridden by this variant.
            variant: 'event-preview.badge',
          }}
        >
          {event.tag}
        </Badge>
      </Box>
    )}
    {event.title}
    {event.speakers && event.speakers}
    <Text
      as="time"
      sx={{
        display: 'block',
        textAlign: 'start',
        // Set bottom margin based on whether this is the final element.
        mb: event.description || event.href || event.registrationLink ? 3 : 0,
      }}
    >
      {event.date}
    </Text>
    {event.description && event.description}
    {(event.href || event.registrationLink) && (
      <Flex
        sx={{
          flexGrow: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
        }}
      >
        {event.href && (
          <Button
            as={Link}
            sx={{
              // Anything below variant cannot be overridden by this variant.
              variant: 'event-preview.buttons.event',
              // Right margin only if there is a registration button.
              mr: event.registrationLink ? [2, 3] : 0,
            }}
            href={event.href}
          >
            Details
          </Button>
        )}
        {event.registrationLink && (
          <Button
            as={Link}
            href={event.registrationLink}
            sx={{
              // Anything below variant cannot be overridden by this variant.
              variant: 'event-preview.buttons.registration',
            }}
          >
            Register
          </Button>
        )}
      </Flex>
    )}
  </Flex>
);

EventPreview.propTypes = {
  event: shape({
    tag: string,
    title: node.isRequired,
    date: string.isRequired,
    speakers: node,
    description: node,
    href: string,
    registrationLink: string,
  }).isRequired,
};

export default EventPreview;
