import React from 'react';
import { node, shape, string } from 'prop-types';
import { Button, Flex, Text } from 'theme-ui';

import Badges from './badges';
import Link from './link';

/**
 * The variant prop applies to buttons and badges only.
 * Text and background color are done via `color` and `bg`.
 *
 * There are no restrictions on what the variants can be called except that the default variant is called `primary`.
 * If you use @undataforum/preset you can use variants `primary` and `secondary` out of the box.
 * In your project you need to add custom variants under the `badges` and `buttons` key.
 */

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
      <Badges values={[event.tag]} variant={variant} mb={1}>
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
        mb: event.description || event.href || event.registrationLink ? 3 : 0,
      }}
    >
      {`${event.date} (${event.duration})`}
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
              // Right margin only if there is a registration button.
              mr: event.registrationLink ? [2, 3] : 0,
            }}
            href={event.href}
            variant={variant}
          >
            Details
          </Button>
        )}
        {event.registrationLink && (
          <Button
            as={Link}
            href={event.registrationLink}
            variant={`buttons.outline.${variant}`}
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
    duration: string.isRequired,
    speakers: node,
    description: node,
    href: string,
    registrationLink: string,
  }).isRequired,
  variant: string,
};

export default EventPreview;
